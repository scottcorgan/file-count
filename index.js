var walk = require('walk');

module.exports = function (dir, done) {
  
  var num = 0;
  
  walker = walk.walk(dir, {
    followLinks: false
  });
  
  walker.on('file', function (root, fileStats, next) {
    
    if (isDotfile(root, fileStats.name)) {
      return next();
    }
    
    num += 1;
    next();
  });
  
  walker.on('end', function () {
    
    done(null, num);
  });
};

function isDotfile (root, name) {
  return name.substr(0, 1) === '.'
    || root.substr(0, 1) === '.'
    || root.indexOf('/.git') > -1;
}