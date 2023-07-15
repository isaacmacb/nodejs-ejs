const express = require ('express');
const server = express();
const port = 3000;

server.set('view engine', 'ejs')

server.get('/home', (req, res) => {
        res.render('index', {nome: 'Isaac Maciel', idade : 22})
})

server.listen(port, () => {
    console.log("Porta se iniciando");
})