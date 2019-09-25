const path = require('path')
const express = require('express')

// const journeyRoutes = require('./journey')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())

// server.use('/api/v1/journey', journeyRoutes)

module.exports = server
