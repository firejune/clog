# clog

Colorful console output for your applications in NodeJS.

* Colors for log, info, warn and error
* Support custom labels
* Support display level and custom display level
* Tiny library
* Easy to use

### Installing

GIT

    $ git clone https://github.com/firejune/clog.git

NPM

    $ npm install clog

### Usage

    var clog = require('clog');
    
    clog('server', 'start listening on port 3000');  // custom head
    
    clog.log('hello', 'world');                      // console.log
    clog.info(['foo', 'bar']);                       // console.info
    clog.warn('baz is deprecated.');                 // console.warn
    clog.error('HTTP/1.1 400 Bad Request');          // console.error
    clog.debug('headers', {                          // console.debug
        'Content-Type': 'text/javascript'
    });

### Configure

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

### Output

![output](https://github.com/firejune/clog/raw/master/images/clog.png)

Have fun!

### License

MIT <3
