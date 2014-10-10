var fileCount = require('./index');
var test = require('tape');
var mkdirp = require('mkdirp');
var rmdir = require('rmdir');
var fs = require('fs');

test('counts files in directory', function (t) {
  
  mkdirp.sync('.tmp');
  fs.writeFileSync('.tmp/file1.txt', '');
  fs.writeFileSync('.tmp/file2.txt', '');
  fs.writeFileSync('.tmp/file3.txt', '');
  
  fileCount(__dirname + '/.tmp', function (err, num) {
    
    rmdir(__dirname + '/.tmp', function () {
      
      t.equal(num, 3, 'file count');
      t.end();
    });
  });
});

test('ignores dotfiles', function (t) {
  
  mkdirp.sync('.tmp');
  fs.writeFileSync('.tmp/.file1.txt', '');
  fs.writeFileSync('.tmp/file2.txt', '');
  fs.writeFileSync('.tmp/file3.txt', '');
  
  fileCount(__dirname + '/.tmp', function (err, num) {
    
    rmdir(__dirname + '/.tmp', function () {
      
      t.equal(num, 2, 'file count');
      t.end();
    });
  });
});