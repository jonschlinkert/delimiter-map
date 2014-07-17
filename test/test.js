/*!
 * delimiter-map <https://github.com/jonschlinkert/delimiter-map>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var delimiterMap = require('..');

describe('delimiterMap', function () {
  it('should return delimiters for the given engine.', function () {
    assert.deepEqual(delimiterMap('handlebars'), ['{{', '}}']);
    assert.deepEqual(delimiterMap('lodash'), ['<%=', '%>']);
    assert.deepEqual(delimiterMap('ejs'), ['<%', '%>']);
  });
});