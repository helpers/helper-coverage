/*!
 * helper-coverage <https://github.com/jonschlinkert/helper-coverage>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
require('should');
var fs = require('fs');
var handlebars = require('handlebars');
var coverage = require('./');

var expected = fs.readFileSync('fixtures/expected.txt', 'utf8');

describe('coverage', function() {
  it('should include a formatted coverage report:', function() {
    coverage('fixtures/summary.txt').should.equal(expected);
  });

  it('should work as a handlebars helper:', function() {
    handlebars.registerHelper('coverage', coverage);
    handlebars.compile('{{coverage "fixtures/summary.txt"}}')().should.equal(expected);
  });

  it('should throw an error when the file cannot be found:', function() {
    (function() {
      coverage('foo');
    }).should.throw('helper-coverage cannot find: foo');
  });
});
