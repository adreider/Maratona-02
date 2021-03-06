const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")
const { dirname } = require("path")

// motor de visualização do html
// ejs vai fazer um processamento do html 
server.set('view engine', 'ejs')

// mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos statics
server.use(express.static("public"))


// usar o req.body
server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(3333, () => {console.log('rodando')})

