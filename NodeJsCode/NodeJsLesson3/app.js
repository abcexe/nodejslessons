var http = require('http');
var module1 = require('./module1')
var module2 = require('./module2')

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world!\n');
    response.write(module2.myVaraible);
    module2.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);