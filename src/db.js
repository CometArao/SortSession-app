const {} = require('pg')

new Pool({// Recibe un objeto de configuración; usuario y contraseña
    user: 'postgres',
    password: 'SuMi2910$$!',
    host: 'localhost',
    port: '5432',
    database: 'firstapi'
})