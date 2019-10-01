const path = require('path')
const express = require('express')

const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const s3 = require('./routes/s3')
const storiesRoutes = require('./routes/stories')
const formRoutes = require('./routes/form')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/v1/user', userRoutes)
server.use('/api/v1/', authRoutes)
server.use('/api/v1/s3', s3)
server.use('/api/v1/stories', storiesRoutes)
server.use('/api/v1/form', formRoutes)

module.exports = server
