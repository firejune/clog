var log = require('./lib/clog');

log('send', 'hellow', 'world');
log.log('Hi!');
log.error('WTF?');
log.info(['one', 'tow']);
log.debug('headers', {
  'Content-Type': 'text/html'
});
log.warn('boo is deprecated.');