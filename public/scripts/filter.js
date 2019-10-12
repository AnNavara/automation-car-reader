const filterSelected = (carData, settings) => {
  const checked = Object.keys(settings).filter(key => settings[key].checked)
  const filteredData = Object.keys(carData)
    .filter(key => checked.includes(key))
    .reduce((obj, key) => {
      obj[key] = carData[key];
      return obj;
    }, {});
  return filteredData
}

export default filterSelected