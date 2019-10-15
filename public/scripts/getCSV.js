const getCSV = async (data, opts) => {
  const pairs = Object.keys(data)
    .filter(key => data[key].checked && data[key].title !== '' && data[key].value !== '' && data[key].value)
    .reduce((obj, key) => {
      obj[data[key].title] = data[key].value;
      return obj;
    }, {});
  const parser = new json2csv.Parser(opts)
  const csv = parser.parse(pairs);
  return csv
}

export default getCSV