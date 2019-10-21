import { readImg } from './readImg.js'
import { state } from './main.js'
import { updateObject } from './utility.js'

const JobsEl = document.querySelector('#Jobs')

const getVehicleData = async (img, imageType) => {
  let newState = { ...state }
  let info = {}

  const checkValidity = (data, check = 100, delimiter = 10) => {
    const numberData = parseFloat(data)
    if (Math.abs(numberData) > check) {
      return numberData / delimiter
    }
    return numberData
  }

  const getRectangles = () => {
    const rectangleArr = []
    const rectangles = Object.keys(state)
      .filter(key => {
        if (state[key].search !== undefined && state[key].pageType === imageType) {
          return state[key].search.rectangle
        }
      })
      .reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    for (let key in rectangles) {
      rectangleArr.push({
        id: key,
        rectangle: state[key].search.rectangle,
        bound: state[key].search.bound
      })
    }
    return rectangleArr
  }

  const runRead = async rectangles => {
    for (let i = 0; i < rectangles.length; i++) {
      info = updateObject(info, await readImg(img, rectangles[i].rectangle, rectangles[i].id, newState))
    }
  }

  if (imageType === 'Design') {
    const renctanglesArr = getRectangles()
    JobsEl.textContent = ' / ' + renctanglesArr.length
    await runRead(renctanglesArr)

    //
    // This is hell
    // 

    // ADD Check for CSR/CSC/3 Letter Skip
    // Maybe join together model and company
    const exclude = ['CSR', 'CSC']
    const split = info.company.read.split('-')
    const read = split.filter(str => {
      let r = false
      exclude.forEach(ex => {
        if (str.includes(ex)) { r = true }
      })
      return !r
    }).map(e => e.trim())
    newState.company.value = read[0]
    newState.model.value = read.slice(1).join(' ')

    // Doors and Seats
    // Fix for +2
    //.replace(/(\/|\n)/gm, '')
    newState.doorCount.value = checkValidity(info.doorCount.read.split(' ')[1])
    newState.seatCount.value = checkValidity(info.doorCount.read.split(' ')[4].replace('/0', ''))
    // Wheelbase, Length, Width
    const wheelbaseRegex = new RegExp('(Wheelbase|Length|Width|:|\/)', 'gm')
    const wheelbaseData = info.wheelbase.read.replace(wheelbaseRegex, '').trim().split(' ').filter(e => e !== '')
    newState.wheelbase.value = checkValidity(wheelbaseData[0], 100, 100)
    newState.length.value = checkValidity(wheelbaseData[1], 100, 100)
    newState.width.value = checkValidity(wheelbaseData[2], 100, 100)
    // Drivetrain 
    newState.enginePosition.value = [info.enginePosition.read.split(' ')[1], info.enginePosition.read.split(' ')[2]].join(' ')
    newState.driveType.value = info.enginePosition.read.split(' ')[4]
    // Gearbox 
    newState.gearbox.value = info.gearbox.read.split(' ').length > 4 ? [info.gearbox.read.split(' ')[3], info.gearbox.read.split(' ')[4]].join(' ') : newState.gearbox.search.read.split(' ')[3]
    newState.gears.value = parseInt(info.gearbox.read.split(' ')[1])
    // Weight
    newState.weight.value = parseInt(info.weight.read.split(' ')[1])
    // Power
    newState.powerPeak.value = checkValidity(info.powerPeak.read.split(' ')[1], 1000, 10)
    newState.powerPeakRev.value = parseInt(info.powerPeak.read.split(' ')[4])
    newState.redline.value = parseInt(info.redline.read.split(' ')[1].replace(/\D/, ''))
    // Bottom
    const replaceBottom = new RegExp('(Bottom End:|Cast Iron|Aluminium|AlSi|AISi)', 'gm')
    const volumeMeasurments = ['cc', 'ci']
    newState.displacement.value = parseInt(info.displacement.read.split(' ').filter(e => {
      let r = false
      volumeMeasurments.forEach(ex => {
        if (e.includes(ex)) { r = true }
      })
      return r
    }).join(' '))
    newState.cylinderArrangement.value = info.displacement.read.replace(replaceBottom, '').split(' ').filter(e => {
      let r = false
      volumeMeasurments.forEach(ex => {
        if (e.includes(ex)) { r = true }
      })
      return !r
    }).join(' ').trim()
    // newState.cylinderCount.value = parseInt(info.displacement.read.replace(replaceBottom, ''))
    // Top
    const topEndRegex = new RegExp('(Top End:|Cast Iron|Aluminium|AlSi|AISi)', 'gm')
    newState.valvetrain.value = info.valvetrain.read.replace(topEndRegex, '').trim()
    // newState.valveNumber.value = parseInt(info.valvetrain.read.split(' ')[3].split('-')[1])
    // Fuel
    newState.aspiration.value = [info.aspiration.read.split(' ')[2], info.aspiration.read.split(' ')[3]].join(' ')
    newState.fuelSystem.value = [...info.aspiration.read.split(' ').splice(4)].join(' ')
  }

  if (imageType === 'Markets') {
    const renctanglesArr = getRectangles()
    JobsEl.textContent = ' / ' + renctanglesArr.length
    await runRead(renctanglesArr)

    newState.drivability.value = checkValidity(newState.drivability.search.read)
    newState.sportiness.value = checkValidity(newState.sportiness.search.read, 50)
    newState.comfort.value = checkValidity(newState.comfort.search.read)
    newState.prestige.value = checkValidity(newState.prestige.search.read)
    newState.safety.value = checkValidity(newState.safety.search.read)
    newState.practicality.value = checkValidity(newState.practicality.search.read)
    newState.utility.value = checkValidity(newState.utility.search.read)
    newState.offroad.value = checkValidity(newState.offroad.search.read)
    newState.reliability.value = checkValidity(newState.reliability.search.read)
    newState.environmentalResistance.value = checkValidity(newState.environmentalResistance.search.read)
    newState.footprint.value = checkValidity(newState.footprint.search.read, 10)
    newState.cargoVolume.value = parseInt(newState.cargoVolume.search.read)
    newState.passengerVolume.value = parseInt(newState.passengerVolume.search.read)
    newState.serviceCosts.value = checkValidity(newState.serviceCosts.search.read, 5000, 10)
    newState.fuelEconomy.value = checkValidity(newState.fuelEconomy.search.read, 30)
    newState.emissions.value = newState.emissions.search.read
    newState.octane.value = newState.octane.search.read
    newState.materialCosts.value = parseInt(newState.materialCosts.search.read)
    newState.productionUnits.value = checkValidity(newState.productionUnits.search.read, 150)
    newState.engineeringUnits.value = checkValidity(newState.engineeringUnits.search.read, 150)
    newState.aproximateCost.value = newState.aproximateCost.search.read
  }

  if (imageType === 'Test Track') {
    const renctanglesArr = getRectangles()
    JobsEl.textContent = ' / ' + renctanglesArr.length
    await runRead(renctanglesArr)

    newState.topSpeed.value = newState.topSpeed.search.read.split(' ')[0]
    newState.acceleration.value = checkValidity(newState.acceleration.search.read, 150, 100)
    newState.speedingUp.value = checkValidity(newState.speedingUp.search.read, 100, 100)
    newState.oneFourthMileTime.value = checkValidity(newState.oneFourthMileTime.search.read, 1000, 100)
    newState.oneKMTime.value = checkValidity(newState.oneKMTime.search.read, 1000, 100)
    newState.twentyMG.value = checkValidity(newState.twentyMG.search.read, 100, 1000)
    newState.twohundredMG.value = checkValidity(newState.twohundredMG.search.read, 100, 1000)
    newState.rollAngle.value = checkValidity(newState.rollAngle.search.read, 15)
    newState.brakingDistance.value = checkValidity(newState.brakingDistance.search.read)
    newState.breakeFadeD.value = checkValidity(newState.breakeFadeD.search.read, 10, 10)
    newState.breakeFadeS.value = checkValidity(newState.breakeFadeS.search.read, 10, 10)
    newState.breakeFadeU.value = checkValidity(newState.breakeFadeU.search.read, 10, 10)
    newState.frontalArea.value = parseFloat(newState.frontalArea.search.read, 100, 1000)
    newState.totalCoeficientOfDrag.value = parseFloat(newState.totalCoeficientOfDrag.search.read, 100, 1000)
    newState.frontDownforce.value = checkValidity(newState.frontDownforce.search.read, 500, 10)
    newState.rearDownforce.value = checkValidity(newState.rearDownforce.search.read)
    newState.powerToWeight.value = checkValidity(newState.powerToWeight.search.read, 1, 1000)
    newState.towCapacity.value = parseFloat(newState.towCapacity.search.read)
    newState.loadCapacity.value = checkValidity(newState.loadCapacity.search.read, 2500, 10)
  }

  updateObject(newState, info)
  return newState
}

export {
  getVehicleData
}