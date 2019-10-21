import recognize from './recognize.js';

const readImg = async (file, size, field) => {
  const obj = {}
  obj[field] = {}
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

  obj[field].read = await recognize(data, size)
  return obj
}

export {
  readImg
}