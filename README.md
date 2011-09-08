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

    $ npm install clog(not yet)

#### Code

    var log = require('./lib/clog');
    
    log('send', 'hellow', 'world');
    log.log('Hi!');
    log.error('WTF?');
    log.info(['one', 'tow']);
    log.debug('headers', {
      'Content-Type': 'text/html'
    });
    log.warn('boo is deprecated.');

### Output

![output](http://firejune.github.com/clog/images/clog.png)

Have fun!

### License

MIT <3
