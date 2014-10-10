var allFiles = require('all-files');

module.exports = function (dir) {
  
  var files = allFiles(process.cwd());
  
  return files.length;
};