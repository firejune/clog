var clog = require('./lib/clog');

// display level configration:
clog.configure({'log level': 2});
//=> {'log': true, 'info': true, 'warn': false, 'error': false, 'debug': false}

// custom display configration:
clog.configure({
  'log level': {
    'log': true,
    'info': true,
    'warn': false,
    'error': true,
    'debug': false
  }
});
//=> {'log': true, 'info': true, 'warn': false, 'error': true, 'debug': false}

// clog usage:
clog('server', 'start listening on port 3000');  // custom head

clog.log('hello', 'world');                      // console.log
clog.info(['foo', 'bar']);                       // console.info
clog.warn('baz is deprecated.');                 // console.warn
clog.error('HTTP/1.1 400 Bad Request');          // console.error
clog.debug('headers', {                          // console.debug
    'Content-Type': 'text/javascript'
});