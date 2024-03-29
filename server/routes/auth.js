const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const router = express.Router()

const { userExists, getUserByName, createUser } = require('../db/users')

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

module.exports = router
