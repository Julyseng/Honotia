const express = require('express')
const router = express.Router()

const { getLanguagesList } = require('../db/fetch')

router.get('/languages', (req, res) => {
  let conn = req.app.connection

  getLanguagesList(conn).then(languages => {
    res.status(201).send(languages)
  })
})

module.exports = router
