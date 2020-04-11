var http = require('http');
var soap = require('soap');
var express = require('express');
var bodyParser = require('body-parser');

var myService = {
    SoapWebService: { //Nom du service dans le WSDL
        SoapWebService_0: { //Port dans le WSDL
            HelloWorld: function (args) { //Nom de l'opération dans WSLD
                return { result: 'Hello ' + args.name };
            }
        }
    }
};

var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

//http server example
var server = http.createServer(function(request,response) {
    response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
soap.listen(server, '/wsdl', myService, xml, function(){
  console.log('server initialized');
});