const renderControls = (settings, script)=> {
  const formElementsArray = []
  for (let key in settings) {
    formElementsArray.push({
      id: key,
      config: settings[key]
    })
  }
  const template = document.querySelector('#Template')
  const form = document.createElement('form')

  formElementsArray.forEach(e => {
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