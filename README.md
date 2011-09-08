# clog

Colorful console output for your applications in NodeJS.

* Colors for log, info, warn and error
* Support custom labels
* Tiny library
* Easy to use

### Installing

GIT

    $ git clone https://github.com/firejune/clog.git

NPM

    $ npm install clog

#### Code

    var clog = require('clog');       // load module
    
    clog('send', 'hellow', 'world');  // custom head
    clog.log('Hi!');                  // log
    clog.error('WTF?');               // error
    clog.info(['one', 'tow']);        // info
    clog.debug('headers', {           // debug
      'Content-Type': 'text/html'
    });
    clog.warn('boo is deprecated.');  // warn

### Output

![output](https://github.com/firejune/clog/raw/master/images/clog.png)

Have fun!

### License

MIT <3
