/*!
 * Clog - Colorful console output for your applications in NodeJS
 *
 * Copyright(c) 2011 Firejune <to@firejune.com>
 * MIT Licensed
 */


/**
 * object to array
 */
var toArray = function (enu) {
  var arr = [];

  for (var i = 0, l = enu.length; i < l; i++)
    arr.push(enu[i]);

  return arr;
};


/**
 * Log types and colors.
 */

var types = {
    'log'   : 00
  , 'error' : 31
  , 'warn'  : 33
  , 'info'  : 36
  , 'debug' : 90
};


/**
 * Clog class.
 */

var Clog = function (opts) {
  opts = opts || {}
  this.colors = false !== opts.colors;

  /**
   * Generate methods.
   */
  var self = this;
  for (var name in types) {
    this.log[name] = (function (name) {
      return function() {
        self.log.apply(self, [name].concat(toArray(arguments)));
      }
    })(name);
  }

  return this.log;
};


/**
 * Log method.
 */

Clog.prototype.log = function (type) {
  console.log.apply(
      console
    , [this.colors
        ? '\033[' + types[type] + 'm' + type + ':\033[39m'
        : type + ':'
      ].concat(toArray(arguments).slice(1))
  );

  return this;
};

module.exports = new Clog;