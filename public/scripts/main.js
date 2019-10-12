import { getSettings, renderControls, createControls } from './settings.js'
import { getVehicleData } from './vehicleData.js'
import getCSV from './getCSV.js'


const input = document.getElementById('File')
const download = document.getElementById('Download')
const textEl = document.getElementById('Text')
const clearButton = document.getElementById('Clear')

let carData = ''
let lastFileName = ''
let csv = null

const createDownload = (data, filename, type) => {
  download.innerHTML = ''
  const file = new Blob([data], { type })
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)
  link.href = url
  link.classList.add('btn')
  link.download = filename
  link.innerHTML = 'Download car CSV data'
  download.appendChild(link)
}

const storeCar = () => {
  localStorage.setItem('carData', JSON.stringify(carData))
}

const getCarStore = () => {
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

const displayCarData = () => {
  textEl.innerHTML = JSON.stringify(carData, null, 2)
}

const readFile = () => {
  const reader = new FileReader()
  reader.addEventListener('load', async () => {
    lastFileName = input.files[0].name
    const newData = await getVehicleData(reader.result)
    carData = { ...carData, ...newData }
    storeCar()
    displayCarData()
    csv = await getCSV(carData)
    createDownload(csv, 'car.csv', 'text/csv')
  })
  reader.readAsDataURL(input.files[0])
}

const getCarDataFromInput = async input => {
  carData = {...carData, ...input}
  storeCar()
  csv = await getCSV(carData)
  createDownload(csv, 'car.csv', 'text/csv')
}

textEl.addEventListener('input', () => {
  getCarDataFromInput(JSON.parse(event.target.value))
})

input.addEventListener('change', () => {
  readFile()
})

clearButton.addEventListener('click', () => { clearCarData() })

window.onload = async () => {
  getSettings()
  getCarStore()
  displayCarData()
  renderControls(createControls())
}

export {
  lastFileName,
  carData,
  storeCar
}