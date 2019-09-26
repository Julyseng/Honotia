const server = require('./server')

const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = require('knex')(config)
server.connection = db

const port = process.env.PORT || 3000

server.listen(port, function() {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
