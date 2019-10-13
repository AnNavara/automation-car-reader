const progress = document.querySelector('#Progress')
let workerId = ''
let workerCount = 1

const recognize = async (data) => {
  const { data: { text } } = await Tesseract.recognize(data, 'eng', {
    langPath: '/lib/tesseract.js-',
    corePath: '/lib/tesseract-core.wasm.js',
    logger: m => {
      console.log(m)
      if (m.status === 'recognizing text') {
        if (workerId !== m.workerId && m.workerId !== undefined) {
          workerId = m.workerId
          workerCount++
        }
        progress.innerHTML = `Job - ${workerCount}. Processing: ${(parseFloat(m.progress) * 100).toFixed(0)} %`
      } else if (m.status === 'loading tesseract core') {
        if (workerId !== m.workerId && m.workerId !== undefined) {
          workerId = m.workerId
          workerCount++
        }
        progress.innerHTML = `Job - ${workerCount} ...Loading`
      }
    }
  });
  return text
}

export default recognize