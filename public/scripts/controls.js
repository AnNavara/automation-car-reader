const renderControls = (state, script) => {
  const controlArray = []
  for (let key in state) {
    controlArray.push({
      id: key,
      config: state[key]
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