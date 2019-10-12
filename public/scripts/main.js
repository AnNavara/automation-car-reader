const car = './img/car.png'
const input = document.getElementById('File')
const textEl = document.getElementById('Text')
const imageContainer = document.querySelector('.imgs')
const progress = document.getElementById('Progress')
const clearButton = document.getElementById('Clear')
const btnClearSettings = document.querySelector('.clearSettings')
const btnHideImages = document.querySelector('.hide')
const settingsEl = document.querySelector('.settings form')
let lastFileName = ''
let workerId = ''
let workerCount = 1

let carData = {}
const getInitialSettings = () => {
  return {
    saveHeader: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Export with Header'
      },
      checked: true,
      displayValue: ''
    },
    company: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Company name'
      },
      checked: true,
      displayValue: 'Company'
    },
    model: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Model name'
      },
      checked: true,
      displayValue: 'Model'
    },
    doorCount: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of Doors'
      },
      checked: false,
      displayValue: 'Doors'
    },
    wheelbase: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Wheelbase'
      },
      checked: false,
      displayValue: 'Wheelbase'
    },
    length: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total length'
      },
      checked: false,
      displayValue: 'Length'
    },
    width: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total width'
      },
      checked: false,
      displayValue: 'Width'
    },
    enginePosition: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Engine Position'
      },
      checked: false,
      displayValue: 'Engine Position'
    },
    driveType: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Drive Type'
      },
      checked: true,
      displayValue: 'Drive Type'
    },
    gearbox: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Gearbox'
      },
      checked: true,
      displayValue: 'Gearbox'
    },
    gears: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of Gears'
      },
      checked: false,
      displayValue: 'Number of Gears'
    },
    weight: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Weight'
      },
      checked: false,
      displayValue: 'Weight'
    },
    powerPeak: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Power'
      },
      checked: true,
      displayValue: 'Power'
    },
    powerPeakRev: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Rev at Power Peak'
      },
      checked: false,
      displayValue: 'Rev at Power Peak'
    },
    redline: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Redline'
      },
      checked: false,
      displayValue: 'Redline'
    },
    displacement: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Displacement'
      },
      checked: true,
      displayValue: 'Displacement'
    },
    cylinderArrangement: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Cylinder Arrangement'
      },
      checked: true,
      displayValue: 'Cylinder Arrangement'
    },
    cylinderCount: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of cyliners'
      },
      checked: true,
      displayValue: 'Cylinders'
    },
    valvetrain: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Valvetrain'
      },
      checked: true,
      displayValue: 'Valvetrain'
    },
    valveNumber: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Valve Number'
      },
      checked: true,
      displayValue: 'Valve Number'
    },
    aspiration: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Aspiration'
      },
      checked: false,
      displayValue: 'Aspiration'
    },
    fuelSystem: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Fuel System'
      },
      checked: false,
      displayValue: 'Fuel System'
    },
    drivability: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Drivability'
      },
      checked: true,
      displayValue: 'Drivability'
    },
    sportiness: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Sportiness'
      },
      checked: true,
      displayValue: 'Sportiness'
    },
    comfort: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Comfort'
      },
      checked: true,
      displayValue: 'Comfort'
    },
    prestige: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Prestige'
      },
      checked: false,
      displayValue: 'Prestige'
    },
    safety: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Safety'
      },
      checked: true,
      displayValue: 'Safety'
    },
    practicality: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Practicality'
      },
      checked: false,
      displayValue: 'Practicality'
    },
    utility: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Utility'
      },
      checked: false,
      displayValue: 'Utility'
    },
    offroad: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Offroad'
      },
      checked: false,
      displayValue: 'Offroad'
    },
    reliability: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Reliability'
      },
      checked: true,
      displayValue: 'Reliability'
    },
    environmentalResistance: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Environmental Resistance'
      },
      checked: false,
      displayValue: 'Environmental Resistance'
    },
  }
}

const storeCar = () => {
  localStorage.setItem('carData', JSON.stringify(carData))
}

const getCarStore = () => {
  if (localStorage.getItem('carData')) {
    carData = JSON.parse(localStorage.getItem('carData'))
    return JSON.parse(localStorage.getItem('carData'))
  }
  return carData
}

const clearCarStore = () => {
  localStorage.removeItem('carData')
}

const saveSettings = () => {
  localStorage.setItem('settings', JSON.stringify(settings))
}

const getSettings = () => {
  if (localStorage.getItem('settings')) {
    settings = JSON.parse(localStorage.getItem('settings'))
    return JSON.parse(localStorage.getItem('settings'))
  }
  settings = getInitialSettings()
  return getInitialSettings()
}

const clearSettings = () => {
  localStorage.removeItem('settings')
}

btnClearSettings.addEventListener('click', () => { clearSettings() })

const createControls = () => {
  const formElementsArray = []
  const changedControls = Object.keys(settings)
    .reduce((obj, key) => {
      obj[key] = settings[key];
      return obj;
    }, {});
  for (let key in changedControls) {
    formElementsArray.push({
      id: key,
      config: settings[key]
    })
  }
  return formElementsArray
}

const changeSettings = (controlName) => {
  settings[controlName].checked = !settings[controlName].checked
  saveSettings()
}

const renderControls = controls => {
  const template = document.querySelector('#Template')

  controls.forEach(e => {
    const clone = document.importNode(template.content, true)
    const text = clone.querySelector('.textContent')
    const checkbox = clone.querySelector('.checkbox')
    checkbox.id = e.id
    checkbox.checked = e.config.checked
    text.textContent = e.config.elementConfig.placeholder
    checkbox.addEventListener('change', event => {
      changeSettings(event.target.id)
    })

    settingsEl.appendChild(clone)
  })
}

const recognize = async (data) => {
  const { data: { text } } = await Tesseract.recognize(data, 'eng', {
    logger: m => {
      console.log(m)
      if (m.status === 'recognizing text') {
        if (workerId !== m.workerId && m.workerId !== undefined) {
          workerId = m.workerId
          workerCount++
        }
        progress.innerHTML = `Job - ${workerCount}. Processing: ${(parseFloat(m.progress) * 100).toFixed(0)} %`
      } else if (m.status === 'loading tesseract core') {
        if (workerId !== m.workerId && m.workerId !== undefined) {
          workerId = m.workerId
          workerCount++
        }
        progress.innerHTML = `Job - ${workerCount} ...Loading`
      }
    }
  });
  return text
}

const readImg = async (file, left, top, width, height) => {
  const data = await jimp.read(file)
    .then(result => {
      const mime = jimp.MIME_PNG
      return result
        .crop(left, top, width, height)
        .greyscale()
        .contrast(0.28)
        .invert()
        .getBufferAsync(mime)
    })
  const image = document.createElement('img')
  image.src = await jimp.read(data)
    .then(result => {
      const mime = jimp.MIME_PNG
      return result
        .getBase64Async(mime)
    })
  btnHideImages.classList.add('hide--active')
  imageContainer.appendChild(image)
  return await recognize(data)
}

const getVehicleData = async (img) => {
  const info = {}

  const checkValidity = (data, check = 100, delimiter = 10) => {
    if (data > check) {
      return data / delimiter
    }
    return data
  }

  if (lastFileName === '1.png') {
    const dataSet_1 = await readImg(img, 100, 750, 750, 270)
    const dataSet_2 = await readImg(img, 850, 750, 650, 270)
    const text = dataSet_1 + dataSet_2

    const arr = text.split(/\r?\n/)
    info.company = arr[0].split('-')[0].trim()
    info.model = arr[0].split('-')[1].trim()

    arr.forEach(e => {
      const line = e.split(' ')

      switch (line[0]) {
        case 'Type:':
          info.doorCount = parseInt(line[1])
          break
        case 'Weight:':
          info.weight = parseInt(line[1])
          break
        case 'Gearbox:':
          info.gearbox = line[3]
          info.gears = parseInt(line[1])
          break
        case 'Wheelbase':
          info.wheelbase = parseFloat(line[5])
          info.length = parseFloat(line[7])
          info.width = parseFloat(line[9])
          break
        case 'Drivetrain:':
          info.enginePosition = [line[1], line[2]].join(' ')
          info.driveType = line[4]
          break
        case 'Power:':
          info.powerPeak = parseFloat(line[1])
          info.powerPeakRev = parseInt(line[4])
          break
        case 'Redline:':
          info.redline = parseInt(line[1].replace(/\D/, ''))
          break
        case 'Bottom':
          info.displacement = parseInt(line[3])
          info.cylinderArrangement = line[4].replace(/\d/g, '')
          info.cylinderCount = parseInt(line[4].replace(/\D/g, ''))
        case 'Top':
          info.valvetrain = line[3].split('-')[0]
          info.valveNumber = parseInt(line[3].split('-')[1])
          break
        case 'Fuel':
          info.aspiration = [line[2], line[3]].join(' ')
          info.fuelSystem = [...line.splice(4)].join(' ')
        default: return
      }
    })
  }

  if (lastFileName === '2.png') {
    const dataSet_1 = await readImg(img, 350, 815, 80, 180)
    const dataSet_2 = await readImg(img, 600, 815, 80, 180)
    const dataSet_3 = await readImg(img, 815, 815, 110, 150)
    const dataSet_4 = await readImg(img, 1050, 815, 130, 110)
    const dataSet_5 = await readImg(img, 1300, 815, 120, 150)
    const text = dataSet_1.concat(dataSet_2, dataSet_3, dataSet_4, dataSet_5)
    const dirtyArr = text.split(/\r?\n/)
    const arr = dirtyArr.filter(e => e !== '')

    info.drivability = checkValidity(arr[0])
    info.sportiness = checkValidity(arr[1])
    info.comfort = checkValidity(arr[2])
    info.prestige = checkValidity(arr[3])
    info.safety = checkValidity(arr[4])
    info.practicality = checkValidity(arr[5])
    info.utility = checkValidity(arr[6])
    info.offroad = checkValidity(arr[7])
    info.reliability = checkValidity(arr[8])
    info.environmentalResistance = checkValidity(arr[9])
    info.footprint = checkValidity(parseFloat(arr[10]), 10)
    info.trunk = parseInt(arr[11])
    info.space = parseInt(arr[12])
    info.serviceCost = parseFloat(arr[13])
    info.fuelEco = checkValidity(parseFloat(arr[14]), 30)
    info.cancer = arr[15]
    info.fuelType = arr[16]
    info.costof = parseInt(arr[17])
    info.productionUnits = checkValidity(arr[18], 150)
    info.engeneeringUnits = checkValidity(arr[19], 150)
    info.price = arr[20]
  }

  if (lastFileName === '3.png') {
    const dataSet_1 = await readImg(img, 240, 815, 120, 180)
    const dataSet_2 = await readImg(img, 510, 815, 120, 110)
    const dataSet_3 = await readImg(img, 770, 815, 120, 150)
    const dataSet_4 = await readImg(img, 1050, 815, 120, 150)
    const dataSet_5 = await readImg(img, 1270, 815, 170, 180)
    const text = dataSet_1.concat(dataSet_2, dataSet_3, dataSet_4, dataSet_5)
    const dirtyArr = text.split(/\r?\n/)
    const arr = dirtyArr.filter(e => e !== '')

    info.topSpeed = parseInt(arr[0])
    info.acceleration = checkValidity(parseFloat(arr[1]), 30)
    info.acceleration2 = checkValidity(parseFloat(arr[2]))
    info.oneForthMile = checkValidity(parseFloat(arr[3]), null, 100)
    info.oneMile = checkValidity(parseFloat(arr[4]), null, 100)
    info.twentyG = checkValidity(parseFloat(arr[5]), 10, 1000)
    info.twohundredG = checkValidity(parseFloat(arr[6]), 10, 1000)
    info.roll = checkValidity(parseFloat(arr[7]), 15)
    info.brakingDistance = checkValidity(parseFloat(arr[8]))
    info.breakingDustingD = checkValidity(parseFloat(arr[9]), 10, 10)
    info.breakingDustingS = checkValidity(parseFloat(arr[10]), 10, 10)
    info.breakingDustingU = checkValidity(parseFloat(arr[11]), 10, 10)
    info.sizeSize = parseFloat(arr[12])
    info.sizeSizeSize = parseFloat(arr[13])
    info.frontLoad = parseFloat(arr[14])
    info.rearLoad = parseFloat(arr[15])
    info.powerToWeight = checkValidity(parseFloat(arr[18]), 1, 1000)
    info.tow = parseFloat(arr[19])
    info.load = parseFloat(arr[20])
  }

  carData = { ...carData, ...info }
  storeCar()
  return info
}

const getCSV = async (file) => {
  await getVehicleData(file)
  const parser = new json2csv.Parser()
  const csv = parser.parse(carData);
  const regex = new RegExp('\"', 'g')
  return csv.replace(regex, '');
}

const createDownload = (data, filename, type) => {
  const download = document.getElementById('Download')
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

const clearCarData = () => {
  carData = {}
  clearCarStore()
  displayCarData()
}

const displayCarData = () => {
  textEl.innerHTML = JSON.stringify(carData, null, 2)
}

input.addEventListener('change', () => {
  const reader = new FileReader()
  reader.addEventListener('load', async () => {
    lastFileName = input.files[0].name
    const csv = await getCSV(reader.result)
    displayCarData()
    createDownload(csv, 'car.csv', 'text/csv')
  })
  reader.readAsDataURL(input.files[0])
})

const toggleImages = () => {
  imageContainer.classList.toggle('imgs--show')
}

btnHideImages.addEventListener('click', () => {
  toggleImages()
  btnHideImages.classList.toggle('hide--open')
})

clearButton.addEventListener('click', () => { clearCarData() })

window.onload = async () => {
  getSettings()
  getCarStore()
  displayCarData()
  renderControls(createControls())
  const csv = await getCSV(reader.result)
  createDownload(csv, 'car.csv', 'text/csv')
}
