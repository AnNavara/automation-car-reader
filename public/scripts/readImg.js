import recognize from './recognize.js';

const imageContainer = document.querySelector('.imgs')
const btnHideImages = document.querySelector('.hide')

const readImg = async (file, size) => {
  const data = await jimp.read(file)
    .then(result => {
      const mime = jimp.MIME_PNG
      return result
        .crop(size.left, size.top, size.width, size.height)
        .greyscale()
        .contrast(0.28)
        .invert()
        .getBufferAsync(mime)
    })
    .catch(err => console.log(err))
  const image = document.createElement('img')
  image.src = await jimp.read(data)
    .then(result => {
      const mime = jimp.MIME_PNG
      return result
        .getBase64Async(mime)
    })
    .catch(err => console.log(err))

  btnHideImages.classList.add('hide--active')
  imageContainer.appendChild(image)
  return await recognize(data, size)
}

btnHideImages.addEventListener('click', () => {
  imageContainer.classList.toggle('imgs--show')
  btnHideImages.classList.toggle('hide--open')
})

export {
  readImg
}