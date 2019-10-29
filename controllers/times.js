'use strict'
const Time = require('../models/time')

/**
 * This function get the records history
 * @param {default params} req 
 * @param {default params} res 
 */
function getTimes (req, res) {
    Time.find({}, (err, times) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion ${timeId}`})
        if (!times || times.length < 1) return res.status(404).send({ message: 'No existen registros en la base de datos' })

        res.status(200).send( { times })
    })
}

/**
 * This function save a new record
 * @param {default params} req 
 * @param {default params} res 
 */
function saveTime (req, res) {    
    let time = new Time()
    time.hour = req.body.hour
    time.minute = req.body.minute
    time.second = req.body.second

    time.save((err, timeStore) => {
        if ( err ) res.status(500).send( {message: `Error al guardar en mongo: ${timeStore}` })

        res.status(200).send({ time: timeStore })
    })
}

module.exports = {
    getTimes,
    saveTime
}