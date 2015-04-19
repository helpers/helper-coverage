/*!
 * helper-coverage <https://github.com/jonschlinkert/helper-coverage>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var fs = require('fs');
var assert = require('assert');
var should = require('should');
var coverage = require('./');

describe('coverage', function () {
  it('should include a formatted coverage report:', function () {
    var expected = fs.readFileSync('fixtures/expected.txt', 'utf8');
    coverage('fixtures/summary.txt').should.equal(expected);
  });

  it('should throw an error when the file cannot be found:', function () {
    (function () {
      coverage('foo');
    }).should.throw('helper-coverage cannot find: foo');
  });
});
