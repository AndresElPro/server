const express = require('express');
const router = express.Router();
// Traemos una funcion de express llamada router

//app.use(function(req, res, next) {
//    console.log('han pedido esta ruta o request url: ' + req.url);
//    next();
//});
// Recibimos un req y res, muestra las request url, que url estoy recibiendo
// del navegador y quiero solo la url que me esta enviando, use es un middleware
// al agregar next va a ir a la siguiente funcion pero va a ser reemplazada por morgan
// un paquete de la comunidad que hace lo mismo

router.get('/', (req, res) => {
    res.render('index.ejs')
});
// Lo que quiero renderizar y mostrar por pantalla en la ruta inicial esta dentro de views/index.ejs

// router.get('/', (req, res) => {
//     res.end('Hello World');// El servidor envia, una finalizacion la peticion / 
//     // y la finaliza con un Hello World
// });
// Cuando mi aplicación reciba una petición get(casi siempre el navegador 
// va al servidor que se abre un servidor), en la ruta inicial / de la router,
// vamos a recibir 2 objetos request(lo que el navegador esta enviando al servidor)
// y response(lo que envia o responde el servidor)

// router.use((req, res, next) => {
//     console.log('Ha pasado por esta función');
//     next();
// })

router.get('/login', (req,res) => {
    res.render('login.ejs');
})

// router.get('/login', (req, res) => {
//     res.end('Aquí va el Login');
// })
// Nueva ruta

module.exports = router;
// lo exportamos para ser utilizado por index.js y así conectar las rutas