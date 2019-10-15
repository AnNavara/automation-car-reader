const getPixelColor = async (img, x, y) => {
  return await jimp.read(img)
    .then(result => {
      return result
        .getPixelColor(x, y)
    })
}

export const detectImage = async (img) => {
  const check = 2184656895;
  const dots = [
    { x: 1550, y: 830 },
    { x: 1550, y: 870 },
    { x: 1550, y: 955 }
  ]
  const pixels = dots.map(dot => getPixelColor(img, dot.x, dot.y))
  const position = await Promise.all(pixels)
    .then(result => result.indexOf(check))
  switch (position) {
    case (0): return 'Design'
    case (1): return 'Markets'
    case (2): return 'Test Track'
    default: throw new Error('Can\'t Detect Image')
  }
}