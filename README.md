# clog

Colorful console output for your applications in NodeJS.

* Colors for log, info, warn and error
* Support custom labels
* Tyny library
* Easy to use

### Installing

GIT

    $ git clone https://github.com/firejune/clog.git

NPM

    $ npm install clog

#### Code

    var debug = require('clog');       // load module
    
    debug('send', 'hellow', 'world');  // custom head
    debug.log('Hi!');                  // log
    debug.error('WTF?');               // error
    debug.info(['one', 'tow']);        // info
    debug.debug('headers', {           // debug
      'Content-Type': 'text/html'
    });
    debug.warn('boo is deprecated.');  // warn

### Output

![output](https://github.com/firejune/clog/raw/master/images/clog.png)

Have fun!

### License

MIT <3
