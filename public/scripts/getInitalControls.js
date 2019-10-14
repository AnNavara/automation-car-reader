export const getInitialControls = () => {
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
      checked: true,
      displayValue: 'Number of Gears'
    },
    weight: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Weight'
      },
      checked: true,
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
      checked: true,
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
    footprint: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Footprint'
      },
      checked: false,
      displayValue: 'Footprint'
    },
    cargoVolume: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Cargo Volume'
      },
      checked: false,
      displayValue: 'Cargo Volume'
    },
    passengerVolume: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Passenger Volume'
      },
      checked: false,
      displayValue: 'Passenger Volume'
    },
    serviceCosts: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Service Costs'
      },
      checked: false,
      displayValue: 'Service Costs'
    },
    fuelEconomy: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Fuel Economy'
      },
      checked: true,
      displayValue: 'Fuel Economy'
    },
    emissions: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Emissions'
      },
      checked: false,
      displayValue: 'Emissions'
    },
    octane: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Octane'
      },
      checked: false,
      displayValue: 'Octane'
    },
    materialCosts: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Material Costs'
      },
      checked: false,
      displayValue: 'Material Costs'
    },
    productionUnits: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Production Units'
      },
      checked: true,
      displayValue: 'Production Units'
    },
    engineeringUnits: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Engineering Units'
      },
      checked: true,
      displayValue: 'Engineering Units'
    },
    aproximateCost: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Aproximate Cost'
      },
      checked: false,
      displayValue: 'Aproximate Cost'
    },
    topSpeed: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Top Speed'
      },
      checked: true,
      displayValue: 'Top Speed'
    },
    acceleration: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Acceleration from standstill'
      },
      checked: true,
      displayValue: 'Acceleration from standstill'
    },
    speedingUp: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Speeding Up'
      },
      checked: true,
      displayValue: 'Speeding Up'
    },
    oneFourthMileTime: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: '1/4 Mile Time'
      },
      checked: false,
      displayValue: '1/4 Mile Time'
    },
    oneKMTime: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: '1 km Time'
      },
      checked: false,
      displayValue: '1 km Time'
    },
    twentyMG: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: '20 m G force'
      },
      checked: false,
      displayValue: '20 m G force'
    },
    twohundredMG: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: '200 m G force'
      },
      checked: false,
      displayValue: '200 m G force'
    },
    rollAngle: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Roll Angle'
      },
      checked: true,
      displayValue: 'Roll Angle'
    },
    brakingDistance: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Braking Distance'
      },
      checked: true,
      displayValue: 'Braking Distance'
    },
    breakeFadeD: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Drivability'
      },
      checked: false,
      displayValue: 'Brake fade Drivability'
    },
    breakeFadeS: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Sportiness'
      },
      checked: false,
      displayValue: 'Brake fade Sportiness'
    },
    breakeFadeU: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Utility'
      },
      checked: false,
      displayValue: 'Brake fade Utility'
    },
    frontalArea: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Frontal Area'
      },
      checked: false,
      displayValue: 'Frontal Area'
    },
    totalCoeficientOfDrag: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total Coeficient of Drag'
      },
      checked: false,
      displayValue: 'Total Coeficient of Drag'
    },
    frontDownforce: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Front Downforce'
      },
      checked: false,
      displayValue: 'Front Downforce'
    },
    rearDownforce: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Rear Downforce'
      },
      checked: false,
      displayValue: 'Rear Downforce'
    },
    powerToWeight: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Power to Weight'
      },
      checked: false,
      displayValue: 'Power to Weight'
    },
    towCapacity: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Tow Capacity'
      },
      checked: false,
      displayValue: 'Tow Capacity'
    },
    loadCapacity: {
      elementType: 'input',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Load Capacity'
      },
      checked: false,
      displayValue: 'Load Capacity'
    }
  }
}
