# file-count

Get the number of files in the given directory

## Install

### CLI

```
npm install file-count -g
```
```
$ file-count .
```

### API

```
npm install file-count --save
```

```js
var fileCount = require('file-count');
var count = fileCount(process.cwd());

console.log(count);
```

