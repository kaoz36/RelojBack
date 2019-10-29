'use stric'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TimeSchema = Schema({
    hour: { type: Number, default: 0 },
    minute: { type: Number, default: 0 },
    second: { type: Number, default: 0 },
})

module.exports = mongoose.model('Hour', TimeSchema)