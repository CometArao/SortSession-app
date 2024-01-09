const { Router } = require('express');

const router = Router(); // Este objeto router nos permite crear nuevas rutas (URL)

router.get('/tasks', (req, res) => { // Obtener / Read
    res.send('Retornando la lista de clases');
})

router.get('/tasks/10', (req, res) => { // Obtener (solo una) / Read (just one)
    res.send('Retornando una sola clase');
})

router.post('/tasks', (req, res) => { // Crear / Create
    res.send('Creando una nueva sesión de clases');
})

router.delete('/tasks', (req, res) => { // Eliminar / Delete
    res.send('Eliminando una sesión de clases');
})

router.put('/tasks', (req, res) => { // Actualizar / Update
    res.send('Actualizando una sesión de clases');
})

module.exports = router; // Exportamos el router para poder usarlo en otros archivos