'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if ( err ) {
        return err
    }
    console.log('Conexion a mongo');

    app.listen(config.port, () => {
        console.log(`Inicializa http://localhost:${config.port}`)
    })

})
