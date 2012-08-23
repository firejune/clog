/*!
 * Clog - Colorful console output for your applications in NodeJS
 *
 * Copyright(c) 2012 Firejune <to@firejune.com>
 * MIT Licensed
 */


/**
 * Object to array
 */

function toArray(enu) {
  var arr = [];

  for (var i = 0, l = enu.length; i < l; i++)
    arr.push(enu[i]);

  return arr;
}

function extendObject(destination, source) {
  for (var property in source)
    destination[property] = source[property];

  return destination;
}


/**
 * Clog environments.
 */

var version = '0.1.5'


/**
 * Colors of log types.
 *
 * Black       30
 * Blue        34
 * Green       32
 * Cyan        36
 * Red         31
 * Purple      35
 * Brown       33
 * Light Gray  37
 *
 */
  , colors = {
      'log'   : 0
    , 'error' : 31
    , 'warn'  : 33
    , 'info'  : 36
    , 'debug' : 90
  }

  , levels = {
      'log': true
    , 'info': true
    , 'warn': true
    , 'error': true
    , 'debug': true
  };


/**
 * Clog class.
 */

var Clog = function () {

  /**
   * Generate methods.
   */

  var self = this;
  for (var name in colors) {
    this.log[name] = (function (name) {
      return function() {
        self.log.apply(self, [name].concat(toArray(arguments)));
      }
    })(name);
  }

  this.log.configure = function (config) {
    return self.configure.apply(self, [config]);
  };

  return this.log;
};


/**
 * Configure method.
 */

Clog.prototype.configure = function (config) {
  var level
    , index = 0;

  if (!config || !(level = config['log level']))
    return 'WTF?';

  if ('object' == typeof level)
    extendObject(levels, level);

  if ('number' == typeof level)
    for (var property in levels) {
      levels[property] = index < level;
      index++;
    }

  return levels;
};


/**
 * Log method.
 */

Clog.prototype.log = function (type, msg) {
  var msgIsString = typeof (msg) == 'string';
  levels[type] !== false && console.log.apply(
      console
    , [colors[type]
        ? '\033[' + colors[type] + 'm' + type + ':\033[39m ' + (msgIsString ? msg : '')
        : '\033[37m' + type + ':\033[39m ' + (msgIsString ? msg : '')
      ].concat(toArray(arguments).slice(msgIsString ? 2 : 1))
  );

  return levels[type];
};


/**
 * Export intance of Clog as the module.
 */

module.exports = new Clog;