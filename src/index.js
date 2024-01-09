const express = require('express'); // Importamos express
const morgan = require('morgan'); // Importamos morgan

const taskRoutes = require('./routes/tasks.routes'); // Importamos las rutas de tareas

const app = express(); // Inicializamos express

app.use(morgan('dev')); // Usamos morgan con el formato dev

app.use(taskRoutes); // Usamos las rutas de tareas

app.listen(3000) // Inicializamos el servidor en el puerto 3000
console.log('Server on port 3000') // Imprimimos en consola un mensaje