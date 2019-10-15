import { readImg } from './readImg.js'
import { state } from './main.js'
import { updateObject } from './utility.js'

const getVehicleData = async (img, imageType) => {
  const textArray = []
  const newState = { ...state }

  const checkValidity = (data, check = 100, delimiter = 10) => {
    let numberData = parseFloat(data)
    if (numberData > check) {
      return numberData / delimiter
    }
    return numberData
  }

  if (imageType === 'Design') {
    const rectangles = [
      // Left side of the Design
      { left: 160, top: 753, width: 600, height: 33 },
      { left: 160, top: 806, width: 600, height: 30 },
      { left: 160, top: 834, width: 600, height: 30 },
      { left: 160, top: 865, width: 600, height: 30 },
      { left: 160, top: 894, width: 600, height: 30 },
      { left: 160, top: 924, width: 600, height: 30 },
      { left: 160, top: 954, width: 600, height: 30 },
      { left: 160, top: 985, width: 600, height: 30 },
      // Right side of the Design
      { left: 865, top: 753, width: 600, height: 33 },
      { left: 865, top: 806, width: 600, height: 30 },
      { left: 865, top: 834, width: 600, height: 30 },
      { left: 865, top: 865, width: 600, height: 30 },
      { left: 865, top: 894, width: 600, height: 30 },
      { left: 865, top: 924, width: 600, height: 30 },
      { left: 865, top: 954, width: 600, height: 30 },
      { left: 865, top: 985, width: 600, height: 30 }
    ]
    for (let i = 0; i < rectangles.length; i++) {
      textArray.push(await readImg(img, rectangles[i]))
    }

    // ADD Check for CSR/CSC/3 Letter Skip
    // Maybe join together model and company
    newState.company.value = textArray[0].split('-')[0].trim()
    newState.model.value = textArray[0].split('-')[1].trim()

    textArray.forEach(e => {
      const line = e.split(' ')

      switch (line[0]) {
        case 'Type:':
          newState.doorCount.value = checkValidity(line[1])
          // Evolve this
          newState.seatCount.value = checkValidity(line[4].replace('/0', ''))
          break
        case 'Weight:':
          newState.weight.value = parseInt(line[1])
          break
        case 'Gearbox:':
          newState.gearbox.value = line[3]
          newState.gears.value = parseInt(line[1])
          break
        case 'Wheelbase':
          newState.wheelbase.value = checkValidity(parseFloat(line[5]), 100, 100)
          newState.length.value = checkValidity(parseFloat(line[7]), 100, 100)
          newState.width.value = checkValidity(parseFloat((line[9])), 100, 100)
          break
        case 'Drivetrain:':
          newState.enginePosition.value = [line[1], line[2]].join(' ')
          newState.driveType.value = line[4]
          break
        case 'Power:':
          newState.powerPeak.value = parseFloat(line[1])
          newState.powerPeakRev.value = parseInt(line[4])
          break
        case 'Redline:':
          newState.redline.value = parseInt(line[1].replace(/\D/, ''))
          break
        case 'Bottom':
          newState.displacement.value = parseInt(line[3])
          newState.cylinderArrangement.value = line[4].replace(/\d/g, '')
          newState.cylinderCount.value = parseInt(line[4].replace(/\D/g, ''))
        case 'Top':
          newState.valvetrain.value = line[3].split('-')[0]
          newState.valveNumber.value = parseInt(line[3].split('-')[1])
          break
        case 'Fuel':
          newState.aspiration.value = [line[2], line[3]].join(' ')
          newState.fuelSystem.value = [...line.splice(4)].join(' ')
        default: return
      }
    })
  }

  if (imageType === 'Markets') {
    const rectangles = [
      // First row of Markets
      { left: 350, top: 815, width: 80, height: 35 },
      { left: 350, top: 850, width: 80, height: 35 },
      { left: 350, top: 887, width: 80, height: 35 },
      { left: 350, top: 925, width: 80, height: 35 },
      { left: 350, top: 961, width: 80, height: 35 },
      // Second row of Markets
      { left: 590, top: 815, width: 90, height: 35 },
      { left: 590, top: 850, width: 90, height: 35 },
      { left: 590, top: 887, width: 90, height: 35 },
      { left: 590, top: 925, width: 90, height: 35 },
      { left: 590, top: 961, width: 90, height: 35 },
      // Third row of Markets
      { left: 811, top: 815, width: 135, height: 35 },
      { left: 811, top: 850, width: 135, height: 35 },
      { left: 811, top: 887, width: 135, height: 35 },
      { left: 811, top: 925, width: 135, height: 35 },
      // Fourth row of Markets
      { left: 1048, top: 815, width: 150, height: 35 },
      { left: 1048, top: 850, width: 150, height: 35 },
      { left: 1048, top: 887, width: 150, height: 35 },
      // Fifth row of Markets
      { left: 1300, top: 815, width: 140, height: 35 },
      { left: 1300, top: 850, width: 140, height: 35 },
      { left: 1300, top: 887, width: 140, height: 35 },
      { left: 1300, top: 925, width: 140, height: 35 }
    ]
    for (let i = 0; i < rectangles.length; i++) {
      textArray.push(await readImg(img, rectangles[i]))
    }
    console.log(textArray)

    newState.drivability.value = checkValidity(textArray[0])
    newState.sportiness.value = checkValidity(textArray[1])
    newState.comfort.value = checkValidity(textArray[2])
    newState.prestige.value = checkValidity(textArray[3])
    newState.safety.value = checkValidity(textArray[4])
    newState.practicality.value = checkValidity(textArray[5])
    newState.utility.value = checkValidity(textArray[6])
    newState.offroad.value = checkValidity(textArray[7])
    newState.reliability.value = checkValidity(textArray[8])
    newState.environmentalResistance.value = checkValidity(textArray[9])
    newState.footprint.value = checkValidity(parseFloat(textArray[10]), 10)
    newState.cargoVolume.value = parseInt(textArray[11])
    newState.passengerVolume.value = parseInt(textArray[12])
    newState.serviceCosts.value = checkValidity(parseFloat(textArray[13]), 5000, 10)
    newState.fuelEconomy.value = checkValidity(parseFloat(textArray[14]), 30)
    newState.emissions.value = textArray[15]
    newState.octane.value = textArray[16]
    newState.materialCosts.value = parseInt(textArray[17])
    newState.productionUnits.value = checkValidity(textArray[18], 150)
    newState.engineeringUnits.value = checkValidity(textArray[19], 150)
    newState.aproximateCost.value = textArray[20]
  }

  if (imageType === 'Test Track') {
    const rectangles = [
      // First row of Test track
      { left: 230, top: 815, width: 145, height: 35 },
      { left: 230, top: 850, width: 145, height: 35 },
      { left: 230, top: 887, width: 145, height: 35 },
      { left: 230, top: 925, width: 145, height: 35 },
      { left: 230, top: 961, width: 145, height: 35 },
      // Second row of Test track
      { left: 490, top: 815, width: 145, height: 35 },
      { left: 490, top: 850, width: 145, height: 35 },
      { left: 490, top: 887, width: 145, height: 35 },
      // Third row of Test track
      { left: 765, top: 815, width: 130, height: 35 },
      { left: 765, top: 850, width: 130, height: 35 },
      { left: 765, top: 887, width: 130, height: 35 },
      { left: 765, top: 925, width: 130, height: 35 },
      // Fourth row of Test track
      { left: 1025, top: 815, width: 135, height: 35 },
      { left: 1025, top: 850, width: 135, height: 35 },
      { left: 1025, top: 887, width: 135, height: 35 },
      { left: 1025, top: 925, width: 135, height: 35 },
      // Fifth row of Test track
      { left: 1255, top: 815, width: 200, height: 35 },
      { left: 1255, top: 850, width: 200, height: 35 },
      { left: 1255, top: 887, width: 200, height: 35 },
      { left: 1255, top: 925, width: 200, height: 35 },
      { left: 1255, top: 961, width: 200, height: 35 }
    ]
    for (let i = 0; i < rectangles.length; i++) {
      textArray.push(await readImg(img, rectangles[i]))
    }
    console.log(textArray)

    newState.topSpeed.value = checkValidity(textArray[0])
    newState.acceleration.value = checkValidity(textArray[1], 30)
    newState.speedingUp.value = checkValidity(parseFloat(textArray[2]))
    newState.oneFourthMileTime.value = checkValidity(parseFloat(textArray[3]), null, 100)
    newState.oneKMTime.value = checkValidity(parseFloat(textArray[4]), null, 100)
    newState.twentyMG.value = checkValidity(parseFloat(textArray[5]), 10, 1000)
    newState.twohundredMG.value = checkValidity(parseFloat(textArray[6]), 10, 1000)
    newState.rollAngle.value = checkValidity(parseFloat(textArray[7]), 15)
    newState.brakingDistance.value = checkValidity(parseFloat(textArray[8]))
    newState.breakeFadeD.value = checkValidity(parseFloat(textArray[9]), 10, 10)
    newState.breakeFadeS.value = checkValidity(parseFloat(textArray[10]), 10, 10)
    newState.breakeFadeU.value = checkValidity(parseFloat(textArray[11]), 10, 10)
    newState.frontalArea.value = parseFloat(textArray[12])
    newState.totalCoeficientOfDrag.value = parseFloat(textArray[13])
    newState.frontDownforce.value = checkValidity(parseFloat(textArray[14]), 500, 10)
    newState.rearDownforce.value = checkValidity(parseFloat(textArray[15]), 500, 10)
    newState.powerToWeight.value = checkValidity(parseFloat(textArray[18]), 1, 1000)
    newState.towCapacity.value = parseFloat(textArray[19])
    newState.loadCapacity.value = checkValidity(parseFloat(textArray[20]), 2500, 10)
  }
  return updateObject(state, newState)
}

export {
  getVehicleData
}