
function deepReaddirSync (src, reg) {
  const fs = require('fs')
  const path = require('path')
  const source = []

  const readdirSync = (src) => {
    const dirPaths = fs.readdirSync(src)

    dirPaths.forEach(s => {
      const filePath = path.join(src, s)
      if (fs.statSync(filePath).isDirectory()) {
        readdirSync(filePath)
      } else {
        source.push(filePath)
      }
    })
  }

  readdirSync(src)

  return source.filter(s => reg ? reg.test(s) : true)
}

module.exports = deepReaddirSync