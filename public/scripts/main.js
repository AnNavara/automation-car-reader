import { getInitialState } from './getInitalState.js'
import renderControls from './controls.js'
import { detectImage } from './detectImage.js'
import { getVehicleData } from './vehicleData.js'
import getCSV from './getCSV.js'
import { updateObject } from './utility.js'

const input = document.getElementById('File')
const downloadEl = document.getElementById('Download')
const textEl = document.getElementById('Text')
const clearCarBtn = document.getElementById('Clear')
const btnClearSettings = document.querySelector('.clearSettings')
const controlsEl = document.querySelector('.controls')

let state = {}

const readFile = () => {
  const reader = new FileReader()
  reader.addEventListener('load', async () => {
    try {
      const imageType = await detectImage(reader.result)
      state = await getVehicleData(reader.result, imageType)
      storeLocal('state', JSON.stringify(state))
      displayCarData()
      createDownload('text/csv')
    } catch (err) {
      console.log(err)
      document.querySelector('.Instruction').textContent = 'ERROR: ' + err
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

const onSettingsChange = controlName => {
  state[controlName].checked = !state[controlName].checked
  storeLocal('state', JSON.stringify(state))
  createDownload('text/csv')
}

const displaySettings = () => {
  controlsEl.innerHTML = ''
  controlsEl.appendChild(renderControls(state, onSettingsChange))
}

btnClearSettings.addEventListener('click', () => {
  state = updateObject(state, getInitialState())
  storeLocal('state', JSON.stringify(state))
  displaySettings()
})

const displayCarData = () => {
  const carData = Object.keys(state)
    .filter(key => state[key].value)
    .reduce((obj, key) => {
      obj[key] = state[key].value;
      return obj;
    }, {});
  Object.entries(carData).length !== 0 && carData.constructor === Object ? textEl.value = JSON.stringify(carData, null, 2) : textEl.value = ''
}

const clearCarData = () => {
  Object.keys(state).forEach(key => {
    if (state[key].value !== null) {
      state[key].value = null
    }
  })
  storeLocal('state', JSON.stringify(state))
  displayCarData()
}

const updateCarDataFromInput = async input => {
  Object.keys(input).forEach(key => state[key].value = input[key])
  storeLocal('state', JSON.stringify(state))
  createDownload('text/csv')
}

textEl.addEventListener('input', () => {
  updateCarDataFromInput(JSON.parse(event.target.value))
})

clearCarBtn.addEventListener('click', () => { clearCarData() })

window.onload = async () => {
  initialiseState()
  displaySettings()
  displayCarData()
  createDownload('text/csv')
}

export {
  state
}