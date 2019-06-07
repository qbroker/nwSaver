/*
 * Save TWclassic to the local filesystem when running in nw.js.
 * Filepath + filename, content and backup filename are provided by the plugin in TWclassic.
 * We use the Linux file convention in this plugin, TWclassic backups are saved by the same function.
 * Last updated 21-02-2019 by Okido, version 1.0.3.
 * Be aware that this code gives full access to your local file system,
 * make sure that you know what you are doing!!!
 */

;(function () {
  'use strict'

  module.exports.saveTWc = function (fullPath, wikiContent) {
    var fs = require('fs')
    /* var os = require('os') */
    try {
      // console.log('Path in: ', fullPath)
      let pathName = process.platform === 'win32' ? fullPath.substr(0, fullPath.lastIndexOf('\\')) : fullPath.substr(0, fullPath.lastIndexOf('/'))
      // console.log('Path out: ', pathName)
      if (!fs.existsSync(pathName)) fs.mkdirSync(pathName)
      fs.writeFileSync(fullPath, wikiContent)
      return true
    } catch (error) { return { error: error } }
  }

  module.exports.loadTWc = function (fullPath) {
    try {
      var fs = require('fs')
      var wikiContent = fs.readFileSync(fullPath).toString()
      return wikiContent
    } catch (error) { return { error: error } }
  }
})()

/*
The MIT License (MIT)

Copyright (c) 2019 Okido
Permission is hereby granted, free of charge,
to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
