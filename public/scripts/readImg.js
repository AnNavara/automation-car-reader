import recognize from './recognize.js';

const imageContainer = document.querySelector('.imgs')
const btnHideImages = document.querySelector('.hide')

const readImg = async (file, left, top, width, height) => {
  const data = await jimp.read(file)
    .then(result => {
      const mime = jimp.MIME_PNG
      return result
        .crop(left, top, width, height)
        .greyscale()
        .contrast(0.28)
        .invert()
        .getBufferAsync(mime)
    })
  const image = document.createElement('img')
  image.src = await jimp.read(data)
    .then(result => {
      const mime = jimp.MIME_PNG
      return result
        .getBase64Async(mime)
    })
  btnHideImages.classList.add('hide--active')
  imageContainer.appendChild(image)
  return await recognize(data)
}

btnHideImages.addEventListener('click', () => {
  toggleImages()
  btnHideImages.classList.toggle('hide--open')
})

const toggleImages = () => {
  imageContainer.classList.toggle('imgs--show')
}

export {
  readImg
}