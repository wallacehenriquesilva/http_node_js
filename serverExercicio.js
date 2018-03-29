var http = require('http');
var url = require('url');

const MedianaService = require('./service/MedianaService');
const CramerService = require('./service/CramerService');
const FibonacciService = require('./service/FibonacciService');
const MmqService = require('./service/MmqService');

http.createServer(
    function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

        switch (request.url.replace("/api/v1/calculator", "").split("?")[0]) {
            case '/':
                response.write("<h1> Página Principal </h1>");
                break;
            case '/fibonacci':
                new FibonacciService()
                    .calcula(
                        url.parse(request.url, true), function (callback) {
                            response.write(callback);
                        });
                break;
            case '/mediana':
                new MedianaService()
                    .calcula(
                        url.parse(request.url, true), function (callback) {
                            response.write(callback);
                        }
                    );
                break;
            case '/cramer':
                new CramerService()
                    .calcula(
                        url.parse(request.url, true), function (callback) {
                            response.write(callback);
                        }
                    );
                break;
            case '/mmq':
                new MmqService()
                    .calcula(
                        url.parse(request.url, true), function (callback) {
                            response.write(callback);
                        }
                    );
                break;
            default:
                response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                response.write("<h1> Página não encontrada </h1>");
        }
    }
).listen(3000);


console.log("Servidor iniciado em localhost:3000");
//http://localhost:3000/cramer?l1=[x,2y,z]=8&l2=[2x,-y,z]=3&l3=[3x,y,-z]=2