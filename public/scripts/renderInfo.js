export const renderInfo = (state, checkboxChange, inputChange) => {
  const infoArray = []
  for (let key in state) {
    infoArray.push({
      id: key,
      config: state[key]
    })
  }

  const template = document.querySelector('#Template')
  const form = document.createElement('form')

  infoArray.forEach(e => {
    const clone = document.importNode(template.content, true)
    const checkbox = clone.querySelector('.checkbox')
    const title = clone.querySelector('.title')
    const value = clone.querySelector('.value')
    const imgEl = clone.querySelector('.img')
    const img = document.createElement('img')

    checkbox.id = e.id
    checkbox.checked = e.config.checked
    title.value = e.config.title ? e.config.title : null
    title.id = e.id
    value.value = e.config.value === undefined ? null : e.config.value
    value.id = e.id
    img.src = e.config.img ? e.config.img : ''
    e.config.img ? imgEl.appendChild(img) : null

    if (e.config.pageType === 'Helper') {
      title.classList.add('locked')
      title.locked = true
      title.setAttribute('readonly', true)

      if (!e.config.value) {
        value.classList.add('locked')
        value.setAttribute('disabled', true)
      }
    }

    if (e.config.error === true) {
      value.classList.add('error')
    }

    title.addEventListener('change', event => {
      inputChange(event.target.id, event.target.value, 'title')
    })
    value.addEventListener('change', event => {
      inputChange(event.target.id, event.target.value, 'value')
    })
    checkbox.addEventListener('change', event => {
      checkboxChange(event.target.id)
    })

    form.appendChild(clone)
  })

  return form
}