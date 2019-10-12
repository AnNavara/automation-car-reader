const getCSV = async (data) => {
  const parser = new json2csv.Parser()
  const csv = parser.parse(data);
  const regex = new RegExp('\"', 'g')
  return csv.replace(regex, '');
}

export default getCSV