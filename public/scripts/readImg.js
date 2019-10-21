import recognize from './recognize.js';
import { updateObject } from './utility.js'

const readImg = async (file, size, field, state) => {
  const obj = { ...state }
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
    .catch(err => { throw new Error(err) })
  obj[field].img = await jimp.read(data)
    .then(result => {
      const mime = jimp.MIME_PNG
      return result
        .getBase64Async(mime)
    })
    .catch(err => { throw new Error(err) })

  obj[field].search.read = await recognize(data, size)
  return updateObject(state, obj)
}

export {
  readImg
}