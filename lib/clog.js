/*!
 * Clog - Colorful console output for your applications in NodeJS
 *
 * Copyright(c) 2011 Firejune <to@firejune.com>
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
 * Clog version.
 */

var version = '0.1.2'

/**
 * Log types and colors.
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
  , types = {
      'log'   : 0
    , 'error' : 31
    , 'warn'  : 33
    , 'info'  : 36
    , 'debug' : 90
  }

  , config = {
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
  for (var name in types) {
    this.log[name] = (function (name) {
      return function() {
        self.log.apply(self, [name].concat(toArray(arguments)));
      }
    })(name);
  }

  this.log.configure = function (settings) {
    return self.configure.apply(self, [settings]);
  };

  return this.log;
};


/**
 * Configure method.
 */

Clog.prototype.configure = function (settings) {
  var level
    , index = 0;

  if (!settings || !(level = settings['log level']))
    return 'WTF?';

  if ('object' == typeof level)
    extendObject(config, level);

  if ('number' == typeof level)
    for (var property in config) {
      config[property] = index < level;
      index++;
    }

  return config;
};


/**
 * Log method.
 */

Clog.prototype.log = function (type) {

  config[type] !== false && console.log.apply(
      console
    , [types[type]
        ? '\033[' + types[type] + 'm' + type + ':\033[39m'
        : type + ':'
      ].concat(toArray(arguments).slice(1))
  );

  return config[type];
};


/**
 * Export intance of Clog as the module.
 */

module.exports = new Clog;