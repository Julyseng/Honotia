const express = require('express')
const router = express.Router()

const { getStories } = require('../db/fetch')

router.get('/stories', (req, res) => {
    let conn = req.app.connection
    getStories(conn).then(stories => {
        res.status(201).send(stories)
    })
})

module.exports = router