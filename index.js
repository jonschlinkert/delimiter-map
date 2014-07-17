/*!
 * delimiter-map <https://github.com/jonschlinkert/delimiter-map>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (engine) {
  var engines = {
		atpl: ['{%', '%}'],
		dot: ['{', '}'],
		dust: ['{>', '/}'],
		eco: ['<%=', '%>'],
		ect: ['<%', '%>'],
		ejs: ['<%', '%>'],
		haml: null,
		handlebars: ['{{', '}}'],
		hogan: ['{{', '}}'],
		jade: null,
		jazz: null,
		jqtpl: null,
		just: null,
		liquor: null,
		lodash: ['<%=', '%>'],
		mote: null,
		mustache: ['{{', '}}'],
		nunjucks: null,
		qejs: null,
		ractive: null,
		swig: ['{%', '%}'],
		templayed: null,
		toffee: null,
		underscore: ['<%=', '%>'],
		walrus: null,
		whiskers: null
  };

  return engines[engine];
};