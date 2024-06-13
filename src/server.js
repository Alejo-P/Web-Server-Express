import express from 'express';

const app = express();

// Creacion de rutas
// Ruta principal
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Ruta de prueba
app.get('/test', (req, res) => {
    res.send('Hello Test!');
});

export default app; // Exportamos la aplicacion