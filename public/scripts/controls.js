const renderControls = (state, script) => {
  const controlArray = []
  // Filter settings from unusable entries
  const settings = Object.keys(state)
    .filter(key => state[key].elementType === 'input')
    .reduce((obj, key) => {
      obj[key] = state[key];
      return obj;
    }, {});
  for (let key in settings) {
    controlArray.push({
      id: key,
      config: settings[key]
    })
  }
  const template = document.querySelector('#Template')
  const form = document.createElement('form')

  controlArray.forEach(e => {
    const clone = document.importNode(template.content, true)
    const text = clone.querySelector('.textContent')
    const checkbox = clone.querySelector('.checkbox')
    checkbox.id = e.id
    checkbox.checked = e.config.checked
    text.textContent = e.config.elementConfig.placeholder
    checkbox.addEventListener('change', event => {
      script(event.target.id)
    })

    form.appendChild(clone)
  })

  return form
}

export default renderControls