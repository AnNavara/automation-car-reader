export const getInitialState = () => {
  return {
    saveHeader: {
      pageType: 'Helper',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Export with Header'
      },
      checked: true,
      title: ''
    },
    company: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Company name'
      },
      checked: true,
      title: 'Company'
    },
    model: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Model name'
      },
      checked: true,
      title: 'Model'
    },
    doorCount: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of Doors'
      },
      checked: false,
      title: 'Doors',
      value: ''
    },
    seatCount: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of Seats'
      },
      checked: true,
      title: 'Seats',
      value: ''
    },
    wheelbase: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Wheelbase'
      },
      checked: false,
      title: 'Wheelbase'
    },
    length: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total length'
      },
      checked: false,
      title: 'Length'
    },
    width: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total width'
      },
      checked: false,
      title: 'Width'
    },
    enginePosition: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Engine Position'
      },
      checked: false,
      title: 'Engine Position'
    },
    driveType: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Drive Type'
      },
      checked: true,
      title: 'Drive Type'
    },
    gearbox: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Gearbox'
      },
      checked: true,
      title: 'Gearbox'
    },
    gears: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of Gears'
      },
      checked: true,
      title: 'Number of Gears'
    },
    weight: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Weight'
      },
      checked: true,
      title: 'Weight'
    },
    powerPeak: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Power'
      },
      checked: true,
      title: 'Power'
    },
    powerPeakRev: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Rev at Power Peak'
      },
      checked: false,
      title: 'Rev at Power Peak'
    },
    redline: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Redline'
      },
      checked: false,
      title: 'Redline'
    },
    displacement: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Displacement'
      },
      checked: true,
      title: 'Displacement'
    },
    cylinderArrangement: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Cylinder Arrangement'
      },
      checked: true,
      title: 'Cylinder Arrangement'
    },
    cylinderCount: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of cyliners'
      },
      checked: true,
      title: 'Cylinders'
    },
    valvetrain: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Valvetrain'
      },
      checked: true,
      title: 'Valvetrain'
    },
    valveNumber: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Valve Number'
      },
      checked: true,
      title: 'Valve Number'
    },
    aspiration: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Aspiration'
      },
      checked: true,
      title: 'Aspiration'
    },
    fuelSystem: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Fuel System'
      },
      checked: false,
      title: 'Fuel System'
    },
    drivability: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Drivability'
      },
      checked: true,
      title: 'Drivability'
    },
    sportiness: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Sportiness'
      },
      checked: true,
      title: 'Sportiness'
    },
    comfort: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Comfort'
      },
      checked: true,
      title: 'Comfort'
    },
    prestige: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Prestige'
      },
      checked: false,
      title: 'Prestige'
    },
    safety: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Safety'
      },
      checked: true,
      title: 'Safety'
    },
    practicality: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Practicality'
      },
      checked: false,
      title: 'Practicality'
    },
    utility: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Utility'
      },
      checked: false,
      title: 'Utility'
    },
    offroad: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Offroad'
      },
      checked: false,
      title: 'Offroad'
    },
    reliability: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Reliability'
      },
      checked: true,
      title: 'Reliability'
    },
    environmentalResistance: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Environmental Resistance'
      },
      checked: false,
      title: 'Environmental Resistance'
    },
    footprint: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Footprint'
      },
      checked: false,
      title: 'Footprint'
    },
    cargoVolume: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Cargo Volume'
      },
      checked: false,
      title: 'Cargo Volume'
    },
    passengerVolume: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Passenger Volume'
      },
      checked: false,
      title: 'Passenger Volume'
    },
    serviceCosts: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Service Costs'
      },
      checked: false,
      title: 'Service Costs'
    },
    fuelEconomy: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Fuel Economy'
      },
      checked: true,
      title: 'Fuel Economy'
    },
    emissions: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Emissions'
      },
      checked: false,
      title: 'Emissions'
    },
    octane: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Octane'
      },
      checked: false,
      title: 'Octane'
    },
    materialCosts: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Material Costs'
      },
      checked: false,
      title: 'Material Costs'
    },
    productionUnits: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Production Units'
      },
      checked: true,
      title: 'Production Units'
    },
    engineeringUnits: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Engineering Units'
      },
      checked: true,
      title: 'Engineering Units'
    },
    aproximateCost: {
      pageType: 'Markets',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Aproximate Cost'
      },
      checked: false,
      title: 'Aproximate Cost'
    },
    topSpeed: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Top Speed'
      },
      checked: true,
      title: 'Top Speed'
    },
    acceleration: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Acceleration from standstill'
      },
      checked: true,
      title: 'Acceleration from standstill'
    },
    speedingUp: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Speeding Up'
      },
      checked: true,
      title: 'Speeding Up'
    },
    oneFourthMileTime: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: '1/4 Mile Time'
      },
      checked: false,
      title: '1/4 Mile Time'
    },
    oneKMTime: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: '1 km Time'
      },
      checked: false,
      title: '1 km Time'
    },
    twentyMG: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: '20 m G force'
      },
      checked: false,
      title: '20 m G force'
    },
    twohundredMG: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: '200 m G force'
      },
      checked: false,
      title: '200 m G force'
    },
    rollAngle: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Roll Angle'
      },
      checked: true,
      title: 'Roll Angle'
    },
    brakingDistance: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Braking Distance'
      },
      checked: true,
      title: 'Braking Distance'
    },
    breakeFadeD: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Drivability'
      },
      checked: false,
      title: 'Brake fade Drivability'
    },
    breakeFadeS: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Sportiness'
      },
      checked: false,
      title: 'Brake fade Sportiness'
    },
    breakeFadeU: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Brake fade Utility'
      },
      checked: false,
      title: 'Brake fade Utility'
    },
    frontalArea: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Frontal Area'
      },
      checked: false,
      title: 'Frontal Area'
    },
    totalCoeficientOfDrag: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Total Coeficient of Drag'
      },
      checked: false,
      title: 'Total Coeficient of Drag'
    },
    frontDownforce: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Front Downforce'
      },
      checked: false,
      title: 'Front Downforce'
    },
    rearDownforce: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Rear Downforce'
      },
      checked: false,
      title: 'Rear Downforce'
    },
    powerToWeight: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Power to Weight'
      },
      checked: false,
      title: 'Power to Weight'
    },
    towCapacity: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Tow Capacity'
      },
      checked: false,
      title: 'Tow Capacity'
    },
    loadCapacity: {
      pageType: 'Test Track',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Load Capacity'
      },
      checked: false,
      title: 'Load Capacity'
    }
  }
}
