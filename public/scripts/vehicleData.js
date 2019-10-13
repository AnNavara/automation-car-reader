import { lastFileName, storeCar } from './main.js'
import { readImg } from './readImg.js'

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
          info.wheelbase = checkValidity(parseFloat(line[5]), 100, 100)
          info.length = checkValidity(parseFloat(line[7]), 100, 100)
          info.width = checkValidity((line[9]), 100, 100)
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
    info.frontLoad = checkValidity(parseFloat(arr[14]), 500, 10)
    info.rearLoad = checkValidity(parseFloat(arr[15]), 500, 10)
    info.powerToWeight = checkValidity(parseFloat(arr[18]), 1, 1000)
    info.tow = parseFloat(arr[19])
    info.load = checkValidity(parseFloat(arr[20]), 2500, 10)
  }
  return info
}

export {
  getVehicleData
}