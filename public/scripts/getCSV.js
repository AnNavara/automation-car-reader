const getCSV = async (data, opts) => {
  opts.includeEmptyRows = true
  opts.defaultValue = 'No Data'
  const pairs = Object.keys(data)
    .filter(key => data[key].checked)
    .reduce((obj, key) => {
      obj[data[key].title] = data[key].value;
      return obj;
    }, {});
  console.log(pairs)
  const parser = new json2csv.Parser(opts)
  const csv = parser.parse(pairs);
  return csv
}

export default getCSV