import { readImg } from './readImg.js'
import { state } from './main.js'
import { updateObject } from './utility.js'

const JobsEl = document.querySelector('#Jobs')

const getVehicleData = async (img, imageType) => {
  let newState = { ...state }

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
      newState = updateObject(newState, await readImg(img, rectangles[i].rectangle, rectangles[i].id, newState))
    }
  }

  if (imageType === 'Design') {
    const renctanglesArr = getRectangles()
    JobsEl.textContent = ' / ' + renctanglesArr.length
    await runRead(renctanglesArr)

    // ADD Check for CSR/CSC/3 Letter Skip
    // Maybe join together model and company
    const exclude = ['CSR', 'CSC']
    const split = newState.company.search.read.split('-')
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
    newState.doorCount.value = checkValidity(newState.doorCount.search.read.split(' ')[1])
    newState.seatCount.value = checkValidity(newState.doorCount.search.read.split(' ')[4].replace('/0', ''))
    // Wheelbase, Length, Width
    newState.wheelbase.value = checkValidity(parseFloat(newState.wheelbase.search.read.split(' ')[5]), 100, 100)
    newState.length.value = checkValidity(parseFloat(newState.wheelbase.search.read.split(' ')[7]), 100, 100)
    // I do not know how does this matching pattern works
    newState.width.value = checkValidity(parseFloat(newState.wheelbase.search.read.split(' ')[8].replace(/(\/)()/, '')), 100, 100)
    // Drivetrain 
    newState.enginePosition.value = [newState.enginePosition.search.read.split(' ')[1], newState.enginePosition.search.read.split(' ')[2]].join(' ')
    newState.driveType.value = newState.enginePosition.search.read.split(' ')[4]
    // Gearbox 
    newState.gearbox.value = newState.gearbox.search.read.split(' ').length > 4 ? [newState.gearbox.search.read.split(' ')[3], newState.gearbox.search.read.split(' ')[4]].join(' ') : newState.gearbox.search.read.split(' ')[3]
    newState.gears.value = parseInt(newState.gearbox.search.read.split(' ')[1])
    // Weight
    newState.weight.value = parseInt(newState.weight.search.read.split(' ')[1])
    // Power
    newState.powerPeak.value = parseFloat(newState.powerPeak.search.read.split(' ')[1])
    newState.powerPeakRev.value = parseInt(newState.powerPeak.search.read.split(' ')[4])
    newState.redline.value = parseInt(newState.redline.search.read.split(' ')[1].replace(/\D/, ''))
    // Bottom
    newState.displacement.value = parseInt(newState.displacement.search.read.split(' ')[3])
    newState.cylinderArrangement.value = newState.displacement.search.read.split(' ')[4].replace(/\d/g, '')
    newState.cylinderCount.value = parseInt(newState.displacement.search.read.split(' ')[4].replace(/\D/g, ''))
    // Top
    newState.valvetrain.value = newState.valvetrain.search.read.split(' ')[3].split('-')[0]
    newState.valveNumber.value = parseInt(newState.valvetrain.search.read.split(' ')[3].split('-')[1])
    // Fuel
    newState.aspiration.value = [newState.aspiration.search.read.split(' ')[2], newState.aspiration.search.read.split(' ')[3]].join(' ')
    newState.fuelSystem.value = [...newState.aspiration.search.read.split(' ').splice(4)].join(' ')
  }

  if (imageType === 'Markets') {
    const renctanglesArr = getRectangles()
    JobsEl.textContent = ' / ' + renctanglesArr.length
    await runRead(renctanglesArr)

    newState.drivability.value = checkValidity(newState.drivability.search.read)
    newState.sportiness.value = checkValidity(newState.sportiness.search.read)
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

  return newState
}

export {
  getVehicleData
}