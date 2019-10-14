import { settings } from './main.js'

const getCSV = async (data, opts) => {
  const fields = Object.keys(settings)
    .filter(key => settings[key].checked && settings[key].displayValue !== '')
  console.log(fields)
  opts.fields
  const parser = new json2csv.Parser(opts)
  const csv = parser.parse(data);

  // Replace Title line
  const lines = csv.replace(new RegExp('\"', 'g'), '').match(/[^\r\n]+/g);
  const replaced = lines[0].split(',').map(key => settings[key].displayValue).join(',')

  return replaced + '\n' + lines[1]
}

export default getCSV