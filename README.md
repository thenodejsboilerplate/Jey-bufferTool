BufferTool
======
## Inspired by
```  
bufferhelper but using ES6 and a bit update
```  

## Install it via NPM

```  
npm install bufferTool
```

## Usage

```
const http = require('http');
const BufferTool = require('bufferTool');

http.createServer(function (request, response) {
  const bufferTool = new bufferTool();

  request.on("data", function (chunk) {
    bufferTool.concat(chunk);
  });
  request.on('end', function () {
    const html = bufferTool.toBuffer().toString();
    response.writeHead(200);
    response.end(html);
  });

}).listen(8001);
```

or：

```
const http = require('http');
const bufferTool = require('bufferTool');

http.createServer(function (request, response) {
  const bufferTool = new bufferTool();
  bufferTool.load(request, function (err, buffer) {
    const html = buffer.toString();
    response.writeHead(200);
    response.end(html);
  });
}).listen(8001);
```

## MIT