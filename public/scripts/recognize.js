const progress = document.querySelector('#Progress')
let workerId = ''
let workerCount = 0

const recognize = async data => {
  const { data: { text } } = await Tesseract.recognize(data, 'eng', {
    langPath: './lang/',
    corePath: './lib/tesseract-core.wasm.js',
    logger: m => {
      if (m.status === 'recognizing text') {
        if (workerId !== m.workerId && m.workerId !== undefined) {
          workerId = m.workerId
          workerCount++
        }
        if (m.progress !== 1) {
          progress.innerHTML = `Job - ${workerCount}. Processing: ${(parseFloat(m.progress) * 100).toFixed(0)} %`
          return
        }
        progress.innerHTML = `Job - ${workerCount} Finished`
      } else if (m.status === 'loading tesseract core') {
        if (workerId !== m.workerId && m.workerId !== undefined) {
          workerId = m.workerId
        }
        progress.innerHTML = '...Loading Job'
      }
    }
  });
  console.log(text)
  return text
}

export default recognize