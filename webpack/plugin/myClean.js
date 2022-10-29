const fs = require('fs');
const path = require('path');

class MyClean {
  constructor(options) {
  }

  apply(compiler) {
    const output = compiler.options.output.path;
    compiler.hooks.entryOption.tap('myClean', () => {
      this.cleanDir(output);
    })
  }

  cleanDir(dir) {
    if (fs.statSync(dir).isDirectory() && fs.readdirSync(dir).length) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
          this.cleanDir(filePath);
        } else {
          fs.unlinkSync(filePath);
        }
      })
    }

    fs.rmdirSync(dir)
  }
}

module.exports = MyClean;