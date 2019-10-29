'use strict'

const express = require('express')
const timesController = require('../controllers/times')
const api = express.Router()

api.get('/v1/times', timesController.getTimes)
api.post('/v1/times', timesController.saveTime)

module.exports = api