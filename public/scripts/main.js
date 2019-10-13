import { getInitialControls } from './getInitalControls.js'
import renderControls from './controls.js'
import { getVehicleData } from './vehicleData.js'
import filterSelected from './filter.js'
import getCSV from './getCSV.js'

const input = document.getElementById('File')
const download = document.getElementById('Download')
const textEl = document.getElementById('Text')
const clearButton = document.getElementById('Clear')
const btnClearSettings = document.querySelector('.clearSettings')
const controlsEl = document.querySelector('.controls')

let carData = {}
let settings = {}
let filteredData = {}
let lastFileName = ''
let csv = null

const readFile = () => {
  const reader = new FileReader()
  reader.addEventListener('load', async () => {
    lastFileName = input.files[0].name
    const newData = await getVehicleData(reader.result)
    carData = { ...carData, ...newData }
    storeCar()
    displayCarData()
    createDownload(`${carData.company} - ${carData.model}.csv`, 'text/csv')
  })
  reader.readAsDataURL(input.files[0])
}

input.addEventListener('change', () => {
  readFile()
})

const createDownload = async (filename, type) => {
  download.innerHTML = ''
  filteredData = filterSelected(carData, settings)
  const options = {
    header: settings.saveHeader.checked
  }
  csv = await getCSV(filteredData, options)
  const file = new Blob([csv], { type })
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)
  link.href = url
  link.classList.add('btn')
  link.download = filename
  link.innerHTML = `Download ${carData.company} - ${carData.model}.csv`
  download.appendChild(link)
}

const changeSettings = (controlName) => {
  settings[controlName].checked = !settings[controlName].checked
  saveSettings()
  createDownload(`${carData.company} - ${carData.model}.csv`, 'text/csv')
}

const displaySettings = () => {
  controlsEl.innerHTML = ''
  controlsEl.appendChild(renderControls(settings, changeSettings))
}

const saveSettings = () => {
  localStorage.setItem('settings', JSON.stringify(settings))
}

const getSettings = () => {
  if (localStorage.getItem('settings')) {
    settings = JSON.parse(localStorage.getItem('settings'))
    return
  }
  settings = getInitialControls()
}

btnClearSettings.addEventListener('click', () => {
  localStorage.removeItem('settings')
  settings = getInitialControls()
  displaySettings()
  createDownload(`${carData.company} - ${carData.model}.csv`, 'text/csv')
})

const displayCarData = () => {
  console.log('Car display run:', carData)
  textEl.innerHTML = JSON.stringify(carData, null, 2)
}

const storeCar = () => {
  localStorage.setItem('carData', JSON.stringify(carData))
}

const getStoredCar = () => {
  if (localStorage.getItem('carData')) {
    carData = JSON.parse(localStorage.getItem('carData'))
  }
}

const clearCarStore = () => {
  localStorage.removeItem('carData')
}

const clearCarData = () => {
  carData = {}
  clearCarStore()
  displayCarData()
}

const updateCarDataFromInput = async input => {
  carData = { ...input }
  storeCar()
  createDownload(`${carData.company} - ${carData.model}.csv`, 'text/csv')
}

textEl.addEventListener('input', () => {
  updateCarDataFromInput(JSON.parse(event.target.value))
})

clearButton.addEventListener('click', () => { clearCarData() })

window.onload = async () => {
  getSettings()
  getStoredCar()
  displayCarData()
  displaySettings()
  createDownload(`${carData.company} - ${carData.model}.csv`, 'text/csv')
}

export {
  lastFileName,
  carData,
  storeCar
}