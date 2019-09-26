const express = require('express')
const router = express.Router()

const db = require('./db')

router.post('/postUserInfo', (req, res) => {
    db.postUserInfoDb(req.body)
        .then(() => {
            res.status(201).send('')
        })
})


module.exports = router
