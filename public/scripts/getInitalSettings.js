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

export default getInitialSettings