const car = './img/car.png'
const imgEl = document.getElementById('Image')
const input = document.getElementById('File')
const textEl = document.getElementById('Text')
const progress = document.getElementById('Progress')
const clearButton = document.getElementById('Clear')
let lastFileName = ''
let carData = {}

const recognize = async (data) => {
  const { data: { text } } = await Tesseract.recognize(data, 'eng', {
    logger: m => {
      console.log(m)
      if (m.status === 'recognizing text') {
        progress.innerHTML = 'Processing: ' + (parseFloat(m.progress) * 100).toFixed(0) + '%'
      } else if (m.status === 'loading tesseract core') {
        progress.innerHTML = '...Loading'
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
  imgEl.src = await jimp.read(data)
    .then(result => {
      const mime = jimp.MIME_PNG
      return result
        .getBase64Async(mime)
    })
  return await recognize(data)
}

const getVehicleData = async (img) => {
  const info = {}

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
          info.fuelSystemConfiguration = [...line.splice(4)].join(' ')
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

    const arr = dirtyArr.filter(e => {
      return e !== ''
    })

    const checkValidity = (data, check = 100) => {
      if (data > check) {
        return data / 10
      }
      return data
    }

    info.drivability = checkValidity(arr[0])
    info.sportiness = checkValidity(arr[1])
    info.comfort = checkValidity(arr[2])
    info.prestige = checkValidity(arr[3])
    info.safety = checkValidity(arr[4])
    info.practicality = checkValidity(arr[5])
    info.utility = checkValidity(arr[6])
    info.offroad = checkValidity(arr[7])
    info.reliability = checkValidity(arr[8])
    info.enviromentalResistance = checkValidity(arr[9])
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
    text = await readImg(img, 200, 815, 1280, 200)
    console.log(text)
  }

  carData = { ...carData, ...info }
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
  link.download = filename
  link.innerHTML = 'Download car CSV data'
  download.appendChild(link)
}

const clearSaved = () => {
  carData = {}
  displaySaved()
}

const displaySaved = () => {
  textEl.innerHTML = JSON.stringify(carData, null, 2)
}

clearButton.addEventListener('click', () => {
  clearSaved()
})

input.addEventListener('change', () => {
  const reader = new FileReader()
  reader.addEventListener('load', async () => {
    lastFileName = input.files[0].name
    const csv = await getCSV(reader.result)
    displaySaved()
    createDownload(csv, 'car.csv', 'text/csv')
  })
  reader.readAsDataURL(input.files[0])
})
