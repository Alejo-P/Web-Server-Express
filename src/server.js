import express from 'express';
import morgan from 'morgan';

// Ruta para los clientes
import routerClient from './routers/rutas_clientes.js';

const app = express();
app.use(morgan('dev')); // Middleware para mostrar las peticiones en consola
app.use(express.json()); // Middleware para que la aplicacion entienda JSON
// Creacion de rutas
// Ruta principal
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Ruta de prueba
app.use('/api/v1/', routerClient);

export default app; // Exportamos la aplicacion