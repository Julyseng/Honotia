const path = require('path')
const express = require('express')

const userRoutes = require('./routes/user')
const authRouthes = require('./routes/auth')
const s3 = require('./routes/s3')
const stories = require('./routes/stories')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/v1/user', userRoutes)
server.use('/api/v1/', authRouthes)
server.use('/api/v1/s3', s3)
server.use('/api/v1/stories', stories)

module.exports = server
