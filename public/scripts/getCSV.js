const getCSV = async (data, opts) => {
  const parser = new json2csv.Parser(opts)
  const csv = parser.parse(data);
  const regex = new RegExp('\"', 'g')
  return csv.replace(regex, '');
}

export default getCSV