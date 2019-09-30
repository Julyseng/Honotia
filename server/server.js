const path = require('path')
const express = require('express')

const journeyRoutes = require('./routes/journey')
const authRouthes = require('./routes/auth')
const s3 = require('./routes/s3')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/v1/journey', journeyRoutes)
server.use('/api/v1/', authRouthes)
server.use('/s3', s3)

module.exports = server
