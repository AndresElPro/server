const express = require('express');
const morgan = require('morgan'); // Trayendo la api de morgan
const app = express();
// Inicializamos o instanciamos express y se lo asignamos a la constante app

const routes = require('./routes');
const routesApi = require('./routes-api');
// ./ significa que van a estar en el mismo directorio

// settings (configuraciones)
app.set('appName', 'Mi primer server');
// Nueva configuracion llamada appname

app.set('views', __dirname + '/views');
// En un carpeta llamada views vamos a configurar las vistas
// __dirname muestra en que ruta esta index.js y lo utilizaremos para concatenar rutas

app.set('view engine', 'ejs');
// Vamos a configurar el motor de la vista o motor de plantilla llamado ejs
// pero nos falta configurar donde vamos a colocarlo

// Middlewares
// app.use(morgan('dev'));
app.use(morgan('combined'));
// Utilizando morgan que hace lo mismo que la función de abajo
// https://www.npmjs.com/package/morgan
// buscar en npm, express middlewares

app.use(routes);
app.use('/api', routesApi);
// ./ significa que van a estar en el mismo directorio

app.get('*', (req, res) => {
    res.end('No encontrado');
})
// Para cualquier ruta no especificada

app.listen(3000, () => {
    console.log('servidor funcionando!')
    console.log('Nombre de la App: ', app.get('appName')); // Obtenemos el nombre de la aplicacion de la variable que cree
});
// Creamos un servidor que escucha en el puerto 3000, cuando se haya levantado el
// servidor hara un console.log, que sera un mensaje del servidor 