import getInitialSettings from './getInitalSettings.js'

const btnClearSettings = document.querySelector('.clearSettings')
const settingsEl = document.querySelector('.settings form')
let settings = {}

const saveSettings = () => {
  localStorage.setItem('settings', JSON.stringify(settings))
}

const getSettings = () => {
  if (localStorage.getItem('settings')) {
    settings = JSON.parse(localStorage.getItem('settings'))
    return JSON.parse(localStorage.getItem('settings'))
  }
  settings = getInitialSettings()
  return getInitialSettings()
}

const clearSettings = () => {
  localStorage.removeItem('settings')
  settings = getInitialSettings()
  renderControls(createControls(), true)
}

btnClearSettings.addEventListener('click', () => { clearSettings() })

const changeSettings = (controlName) => {
  settings[controlName].checked = !settings[controlName].checked
  saveSettings()
}

const createControls = () => {
  const formElementsArray = []
  const changedControls = Object.keys(settings)
    .reduce((obj, key) => {
      obj[key] = settings[key];
      return obj;
    }, {});
  for (let key in changedControls) {
    formElementsArray.push({
      id: key,
      config: settings[key]
    })
  }
  return formElementsArray
}

const renderControls = (controls, replace = false)=> {
  const template = document.querySelector('#Template')

  if (replace) {
    settingsEl.innerHTML = ''
  }

  controls.forEach(e => {
    const clone = document.importNode(template.content, true)
    const text = clone.querySelector('.textContent')
    const checkbox = clone.querySelector('.checkbox')
    checkbox.id = e.id
    checkbox.checked = e.config.checked
    text.textContent = e.config.elementConfig.placeholder
    checkbox.addEventListener('change', event => {
      changeSettings(event.target.id)
    })

    settingsEl.appendChild(clone)
  })
}

export {
  getSettings,
  renderControls,
  createControls
}