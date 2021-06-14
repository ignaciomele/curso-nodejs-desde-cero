

/*const http = require('http')

const colors = require('colors')

const handleServer = function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>Hola Mundo</h1>')
    res.end()
}

const server = http.createServer(handleServer)

server.listen(3000, function () {
    console.log('server on port 3000'.yellow)
})*/

/*FORMA MAS SIMPLE
const express = require('express')

const colors = require('colors')

const server = express()

server.get('/', function (req, res) {
    res.send('<h1> Hola mundo con express y node</h1>')
    res.end()
})

server.listen(3000, function(){
    console.log('server on port 3000' .red)
})*/



/*const http = require('http')

const handleServer = function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>Hola Mundo</h1>')
    res.end()
}

const server = http.createServer(handleServer)

server.listen(3000, function () {
    console.log('server on port 3000')
})*/

/*http.createServer(function (req, res) {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.write('esto es un simple texto')
    res.end()
}).listen(3000)*/

/*const fs = require('fs')

fs.readFile('./texto.txt', function(err, data){
    if (err){
        console.log(err)
    }
    console.log(data.toString())
})*/

/*const fs = require('fs')

fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err)
    }
    console.log('Archivo creado')
})

console.log('ultima linea de codigo')*/

/*const os = require ('os')

console.log(os.platform())
console.log(os.release())
console.log('free men: ', os.freemem(), ' bytes')
console.log('total men: ', os.totalmem(), ' bytes')*/