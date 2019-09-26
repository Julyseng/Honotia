const path = require('path')
const express = require('express')

const journeyRoutes = require('./routes/journey')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/api/v1/journey', journeyRoutes)

module.exports = server
