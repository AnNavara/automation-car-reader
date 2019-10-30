export const getInitialState = function () {
  return {
    saveHeader: {
      pageType: 'Helper',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Export with Header'
      },
      checked: true,
      title: 'Export with header'
    },
    omitWords: {
      pageType: 'Helper',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Omit words'
      },
      checked: true,
      title: 'Omit words',
      value: 'CSR, CSC, TCC'
    },
    company: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Company name'
      },
      search: {
        rectangle: { left: 160, top: 753, width: 600, height: 33 },
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
      search: {
        bound: 'company'
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
      search: {
        rectangle: { left: 160, top: 806, width: 600, height: 30 },
        bound: ['seatCount']
      },
      checked: false,
      title: 'Doors'
    },
    seatCount: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Number of Seats'
      },
      search: {
        bound: 'seatCount'
      },
      checked: true,
      title: 'Seats'
    },
    wheelbase: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Wheelbase'
      },
      search: {
        rectangle: { left: 160, top: 834, width: 600, height: 30 },
        bound: ['length', 'width']
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
      search: {
        rectangle: { left: 160, top: 894, width: 600, height: 30 },
        bound: ['driveType']
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
      search: {
        rectangle: { left: 160, top: 924, width: 600, height: 30 },
        bound: ['gears']
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
      search: {
        rectangle: { left: 160, top: 985, width: 600, height: 30 }
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
      search: {
        rectangle: { left: 865, top: 806, width: 600, height: 30 }
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
      search: {
        rectangle: { left: 865, top: 834, width: 600, height: 30 }
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
      search: {
        rectangle: { left: 865, top: 865, width: 600, height: 30 }
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
    // cylinderCount: {
    //   pageType: 'Design',
    //   elementConfig: {
    //     type: 'checkbox',
    //     placeholder: 'Number of cyliners'
    //   },
    //   checked: true,
    //   title: 'Cylinders'
    // },
    valvetrain: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Valvetrain'
      },
      search: {
        rectangle: { left: 865, top: 894, width: 600, height: 30 }
      },
      checked: true,
      title: 'Valvetrain'
    },
    // valveNumber: {
    //   pageType: 'Design',
    //   elementConfig: {
    //     type: 'checkbox',
    //     placeholder: 'Valve Number'
    //   },
    //   checked: true,
    //   title: 'Valve Number'
    // },
    aspiration: {
      pageType: 'Design',
      elementConfig: {
        type: 'checkbox',
        placeholder: 'Aspiration'
      },
      search: {
        rectangle: { left: 865, top: 954, width: 600, height: 30 }
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
      search: {
        rectangle: { left: 350, top: 815, width: 80, height: 35 }
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
      search: {
        rectangle: { left: 350, top: 850, width: 80, height: 35 }
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
      search: {
        rectangle: { left: 350, top: 887, width: 80, height: 35 }
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
      search: {
        rectangle: { left: 350, top: 925, width: 80, height: 35 }
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
      search: {
        rectangle: { left: 350, top: 961, width: 80, height: 35 }
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
      search: {
        rectangle: { left: 590, top: 815, width: 90, height: 35 }
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
      search: {
        rectangle: { left: 590, top: 850, width: 90, height: 35 }
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
      search: {
        rectangle: { left: 590, top: 887, width: 90, height: 35 }
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
      search: {
        rectangle: { left: 590, top: 925, width: 90, height: 35 }
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
      search: {
        rectangle: { left: 590, top: 961, width: 90, height: 35 }
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
      search: {
        rectangle: { left: 811, top: 815, width: 135, height: 35 }
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
      search: {
        rectangle: { left: 811, top: 850, width: 135, height: 35 }
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
      search: {
        rectangle: { left: 811, top: 887, width: 135, height: 35 }
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
      search: {
        rectangle: { left: 811, top: 925, width: 135, height: 35 }
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
      search: {
        rectangle: { left: 1048, top: 815, width: 150, height: 35 }
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
      search: {
        rectangle: { left: 1048, top: 850, width: 150, height: 35 }
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
      search: {
        rectangle: { left: 1048, top: 887, width: 150, height: 35 }
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
      search: {
        rectangle: { left: 1300, top: 815, width: 140, height: 35 }
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
      search: {
        rectangle: { left: 1300, top: 850, width: 140, height: 35 }
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
      search: {
        rectangle: { left: 1300, top: 887, width: 140, height: 35 }
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
      search: {
        rectangle: { left: 1300, top: 925, width: 140, height: 35 }
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
      search: {
        rectangle: { left: 230, top: 815, width: 145, height: 35 }
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
      search: {
        rectangle: { left: 230, top: 850, width: 145, height: 35 }
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
      search: {
        rectangle: { left: 230, top: 887, width: 145, height: 35 }
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
      search: {
        rectangle: { left: 230, top: 925, width: 145, height: 35 }
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
      search: {
        rectangle: { left: 230, top: 961, width: 145, height: 35 }
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
      search: {
        rectangle: { left: 490, top: 815, width: 145, height: 35 }
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
      search: {
        rectangle: { left: 490, top: 850, width: 145, height: 35 }
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
      search: {
        rectangle: { left: 490, top: 887, width: 145, height: 35 }
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
      search: {
        rectangle: { left: 765, top: 815, width: 130, height: 35 }
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
      search: {
        rectangle: { left: 765, top: 850, width: 130, height: 35 }
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
      search: {
        rectangle: { left: 765, top: 887, width: 130, height: 35 }
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
      search: {
        rectangle: { left: 765, top: 925, width: 130, height: 35 }
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
      search: {
        rectangle: { left: 1025, top: 815, width: 135, height: 35 }
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
      search: {
        rectangle: { left: 1025, top: 850, width: 135, height: 35 }
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
      search: {
        rectangle: { left: 1025, top: 887, width: 135, height: 35 }
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
      search: {
        rectangle: { left: 1025, top: 925, width: 135, height: 35 }
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
      search: {
        rectangle: { left: 1255, top: 887, width: 200, height: 35 }
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
      search: {
        rectangle: { left: 1255, top: 925, width: 200, height: 35 }
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
      search: {
        rectangle: { left: 1255, top: 961, width: 200, height: 35 }
      },
      checked: false,
      title: 'Load Capacity'
    }
  }
}
