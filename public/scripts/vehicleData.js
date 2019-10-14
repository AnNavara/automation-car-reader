import { lastFileName, storeCar } from './main.js'
import { readImg } from './readImg.js'

const getVehicleData = async (img) => {
  const info = {}

  const checkValidity = (data, check = 100, delimiter = 10) => {
    let numberData = parseInt(data)
    if (numberData > check) {
      return numberData / delimiter
    }
    return numberData
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
          info.doorCount = checkValidity(line[1])
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
          info.width = checkValidity(parseInt((line[9])), 100, 100)
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
    info.cargoVolume = parseInt(arr[11])
    info.passengerVolume = parseInt(arr[12])
    info.serviceCosts = checkValidity(parseFloat(arr[13]), 5000, 10)
    info.fuelEconomy = checkValidity(parseFloat(arr[14]), 30)
    info.emissions = arr[15]
    info.octane = arr[16]
    info.materialCosts = parseInt(arr[17])
    info.productionUnits = checkValidity(arr[18], 150)
    info.engineeringUnits = checkValidity(arr[19], 150)
    info.aproximateCost = arr[20]
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

    info.topSpeed = checkValidity(arr[0])
    info.acceleration = checkValidity(arr[1], 30)
    info.speedingUp = checkValidity(parseFloat(arr[2]))
    info.oneFourthMileTime = checkValidity(parseFloat(arr[3]), null, 100)
    info.oneKMTime = checkValidity(parseFloat(arr[4]), null, 100)
    info.twentyMG = checkValidity(parseFloat(arr[5]), 10, 1000)
    info.twohundredMG = checkValidity(parseFloat(arr[6]), 10, 1000)
    info.rollAngle = checkValidity(parseFloat(arr[7]), 15)
    info.brakingDistance = checkValidity(parseFloat(arr[8]))
    info.breakeFadeD = checkValidity(parseFloat(arr[9]), 10, 10)
    info.breakeFadeS = checkValidity(parseFloat(arr[10]), 10, 10)
    info.breakeFadeU = checkValidity(parseFloat(arr[11]), 10, 10)
    info.frontalArea = parseFloat(arr[12])
    info.totalCoeficientOfDrag = parseFloat(arr[13])
    info.frontDownforce = checkValidity(parseFloat(arr[14]), 500, 10)
    info.rearDownforce = checkValidity(parseFloat(arr[15]), 500, 10)
    info.powerToWeight = checkValidity(parseFloat(arr[18]), 1, 1000)
    info.towCapacity = parseFloat(arr[19])
    info.loadCapacity = checkValidity(parseFloat(arr[20]), 2500, 10)
  }
  return info
}

export {
  getVehicleData
}