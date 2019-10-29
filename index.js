'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if ( err ) {
        return err
    }

    app.listen(config.port, () => {
        console.log(`Start http://localhost:${config.port}`)
    })

})
