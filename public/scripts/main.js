import { getInitialState } from './getInitalState.js'
import { detectImage } from './detectImage.js'
import { getVehicleData } from './vehicleData.js'
import getCSV from './getCSV.js'
import { renderInfo } from './renderInfo.js'

const input = document.getElementById('File')
const downloadEl = document.getElementById('Download')
const resultEl = document.querySelector('.result')
const btnClearSettings = document.querySelector('.clearSettings')
const clearCarBtn = document.getElementById('Clear')

let state = {}

const readFile = () => {
  const reader = new FileReader()
  reader.addEventListener('load', async () => {
    try {
      const imageType = await detectImage(reader.result)
      state = await getVehicleData(reader.result, imageType)
      storeLocal('state', JSON.stringify(state))
      displayInfo()
      createDownload('text/csv')
    } catch (err) {
      console.log(err)
      document.querySelector('.instruction').textContent = 'ERROR: ' + err
    }
  })
  reader.readAsDataURL(input.files[0])
}

input.addEventListener('change', () => {
  readFile()
})

const initialiseState = () => {
  if (getLocal('state')) {
    state = JSON.parse(getLocal('state'))
    return
  }
  state = getInitialState()
}

const getLocal = id => localStorage.getItem(id)
const storeLocal = (id, data) => localStorage.setItem(id, data)
const clearStore = id => localStorage.removeItem(id)

const createDownload = async (type) => {
  if (Object.entries(state).filter(e => e.value).length <= 1) return
  downloadEl.innerHTML = ''
  const options = {
    header: state.saveHeader.checked
  }
  const csv = await getCSV(state, options)
  const file = new Blob([csv], { type })
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)
  link.href = url
  link.classList.add('btn')
  link.download = `${state.company.value || 'Company'} - ${state.model.value || 'Model'}.csv`
  link.textContent = `Download ${state.company.value || 'Company'} - ${state.model.value || 'Model'}.csv`
  downloadEl.appendChild(link)
}

const onCheckboxChange = id => {
  state[id].checked = !state[id].checked
  storeLocal('state', JSON.stringify(state))
  createDownload('text/csv')
}

const onInputChange = (id, value, type) => {
  if (type === 'value') {
    state[id].value = value
  }
  if (type = 'title') {
    state[id].title = value
  }
  storeLocal('state', JSON.stringify(state))
  createDownload('text/csv')
}

const displayInfo = () => {
  resultEl.innerHTML = ''
  resultEl.appendChild(renderInfo(state, onCheckboxChange, onInputChange))
}

btnClearSettings.addEventListener('click', () => {
  const oldState = state
  const newState = getInitialState()
  Object.entries(oldState)
    .forEach(e => {
      newState[e[0]].value = e[1].value
      newState[e[0]].img = e[1].img
    })
  state = newState
  storeLocal('state', JSON.stringify(state))
  displayInfo()
})

const clearCarData = () => {
  const oldState = state
  const newState = getInitialState()
  Object.entries(oldState)
    .forEach(e => {
      newState[e[0]].checked = e[1].checked
      newState[e[0]].title = e[1].title
    })
  state = newState
  storeLocal('state', JSON.stringify(state))
  displayInfo()
}

clearCarBtn.addEventListener('click', () => { clearCarData() })

window.onload = async () => {
  initialiseState()
  displayInfo()
  createDownload('text/csv')
}

export {
  state
}