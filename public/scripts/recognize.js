const progress = document.querySelector('#Progress')
let workerId = ''
let workerCount = 0
let jobs = document.querySelector('#Jobs').textContent

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
          progress.innerHTML = `Processing - ${workerCount}`
          return
        }
        progress.innerHTML = `Finished - ${workerCount}`
      } else if (m.status === 'loading tesseract core') {
        if (workerId !== m.workerId && m.workerId !== undefined) {
          workerId = m.workerId
          if (jobs <= workerCount) workerCount = 0
        }
        progress.innerHTML = `...Loading - ${workerCount}`
      }
    }
  });
  return text
}

export default recognize