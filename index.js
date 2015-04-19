/*!
 * helper-coverage <https://github.com/jonschlinkert/helper-coverage>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var stripAnsi = require('strip-ansi');

module.exports = function coverage(fp) {
  if (!fs.existsSync(fp)) {
    throw new Error('helper-coverage cannot find: ' + fp);
  }

  var str = fs.readFileSync(fp, 'utf8');
  return stripAnsi(str).replace(/^=.*/gm, '');
};
