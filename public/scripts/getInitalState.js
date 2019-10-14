export const getInitialState = () => {
  return {
    saveHeader: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Export with Header'
      },
      checked: true,
      title: ''
    },
    company: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Company name'
      },
      checked: true,
      title: 'Company',
      value: ''
    },
    model: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Model name'
      },
      checked: true,
      title: 'Model'
    },
    doorCount: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of Doors'
      },
      checked: false,
      title: 'Doors',
      value: ''
    },
    wheelbase: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Wheelbase'
      },
      checked: false,
      title: 'Wheelbase'
    },
    length: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total length'
      },
      checked: false,
      title: 'Length'
    },
    width: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total width'
      },
      checked: false,
      title: 'Width'
    },
    enginePosition: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Engine Position'
      },
      checked: false,
      title: 'Engine Position'
    },
    driveType: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Drive Type'
      },
      checked: true,
      title: 'Drive Type'
    },
    gearbox: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Gearbox'
      },
      checked: true,
      title: 'Gearbox'
    },
    gears: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of Gears'
      },
      checked: true,
      title: 'Number of Gears'
    },
    weight: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Weight'
      },
      checked: true,
      title: 'Weight'
    },
    powerPeak: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Power'
      },
      checked: true,
      title: 'Power'
    },
    powerPeakRev: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Rev at Power Peak'
      },
      checked: false,
      title: 'Rev at Power Peak'
    },
    redline: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Redline'
      },
      checked: false,
      title: 'Redline'
    },
    displacement: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Displacement'
      },
      checked: true,
      title: 'Displacement'
    },
    cylinderArrangement: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Cylinder Arrangement'
      },
      checked: true,
      title: 'Cylinder Arrangement'
    },
    cylinderCount: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of cyliners'
      },
      checked: true,
      title: 'Cylinders'
    },
    valvetrain: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Valvetrain'
      },
      checked: true,
      title: 'Valvetrain'
    },
    valveNumber: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Valve Number'
      },
      checked: true,
      title: 'Valve Number'
    },
    aspiration: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Aspiration'
      },
      checked: true,
      title: 'Aspiration'
    },
    fuelSystem: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Fuel System'
      },
      checked: false,
      title: 'Fuel System'
    },
    drivability: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Drivability'
      },
      checked: true,
      title: 'Drivability'
    },
    sportiness: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Sportiness'
      },
      checked: true,
      title: 'Sportiness'
    },
    comfort: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Comfort'
      },
      checked: true,
      title: 'Comfort'
    },
    prestige: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Prestige'
      },
      checked: false,
      title: 'Prestige'
    },
    safety: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Safety'
      },
      checked: true,
      title: 'Safety'
    },
    practicality: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Practicality'
      },
      checked: false,
      title: 'Practicality'
    },
    utility: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Utility'
      },
      checked: false,
      title: 'Utility'
    },
    offroad: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Offroad'
      },
      checked: false,
      title: 'Offroad'
    },
    reliability: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Reliability'
      },
      checked: true,
      title: 'Reliability'
    },
    environmentalResistance: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Environmental Resistance'
      },
      checked: false,
      title: 'Environmental Resistance'
    },
    footprint: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Footprint'
      },
      checked: false,
      title: 'Footprint'
    },
    cargoVolume: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Cargo Volume'
      },
      checked: false,
      title: 'Cargo Volume'
    },
    passengerVolume: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Passenger Volume'
      },
      checked: false,
      title: 'Passenger Volume'
    },
    serviceCosts: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Service Costs'
      },
      checked: false,
      title: 'Service Costs'
    },
    fuelEconomy: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Fuel Economy'
      },
      checked: true,
      title: 'Fuel Economy'
    },
    emissions: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Emissions'
      },
      checked: false,
      title: 'Emissions'
    },
    octane: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Octane'
      },
      checked: false,
      title: 'Octane'
    },
    materialCosts: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Material Costs'
      },
      checked: false,
      title: 'Material Costs'
    },
    productionUnits: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Production Units'
      },
      checked: true,
      title: 'Production Units'
    },
    engineeringUnits: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Engineering Units'
      },
      checked: true,
      title: 'Engineering Units'
    },
    aproximateCost: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Aproximate Cost'
      },
      checked: false,
      title: 'Aproximate Cost'
    },
    topSpeed: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Top Speed'
      },
      checked: true,
      title: 'Top Speed'
    },
    acceleration: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Acceleration from standstill'
      },
      checked: true,
      title: 'Acceleration from standstill'
    },
    speedingUp: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Speeding Up'
      },
      checked: true,
      title: 'Speeding Up'
    },
    oneFourthMileTime: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: '1/4 Mile Time'
      },
      checked: false,
      title: '1/4 Mile Time'
    },
    oneKMTime: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: '1 km Time'
      },
      checked: false,
      title: '1 km Time'
    },
    twentyMG: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: '20 m G force'
      },
      checked: false,
      title: '20 m G force'
    },
    twohundredMG: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: '200 m G force'
      },
      checked: false,
      title: '200 m G force'
    },
    rollAngle: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Roll Angle'
      },
      checked: true,
      title: 'Roll Angle'
    },
    brakingDistance: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Braking Distance'
      },
      checked: true,
      title: 'Braking Distance'
    },
    breakeFadeD: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Drivability'
      },
      checked: false,
      title: 'Brake fade Drivability'
    },
    breakeFadeS: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Sportiness'
      },
      checked: false,
      title: 'Brake fade Sportiness'
    },
    breakeFadeU: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Utility'
      },
      checked: false,
      title: 'Brake fade Utility'
    },
    frontalArea: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Frontal Area'
      },
      checked: false,
      title: 'Frontal Area'
    },
    totalCoeficientOfDrag: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total Coeficient of Drag'
      },
      checked: false,
      title: 'Total Coeficient of Drag'
    },
    frontDownforce: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Front Downforce'
      },
      checked: false,
      title: 'Front Downforce'
    },
    rearDownforce: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Rear Downforce'
      },
      checked: false,
      title: 'Rear Downforce'
    },
    powerToWeight: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Power to Weight'
      },
      checked: false,
      title: 'Power to Weight'
    },
    towCapacity: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Tow Capacity'
      },
      checked: false,
      title: 'Tow Capacity'
    },
    loadCapacity: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Load Capacity'
      },
      checked: false,
      title: 'Load Capacity'
    }
  }
}
