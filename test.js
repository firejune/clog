var clog = require('./lib/clog');

clog('response', 'hello', 'world');     // custom head

clog.log('Hi!');                        // console.log
clog.info(['foo', 'bar']);              // console.info
clog.warn('baz is deprecated.');        // console.warn
clog.error('HTTP/1.1 400 Bad Request'); // console.error
clog.debug('headers', {                 // console.debug
  'Content-Type': 'text/javascript'
});