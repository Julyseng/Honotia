const express = require('express')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const { getTokenDecoder } = require('authenticare/server')

const tokenDecoder = getTokenDecoder(false)

const db = require('../db/register')

var s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  subregion: 'ap-southeast-2' //sydney
})

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'honotia',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

const router = express.Router()

router.post(
  '/upload',
  [tokenDecoder, upload.single('profileImg', 3)],
  (req, res) => {
    let conn = req.app.connection

    // console.log('hit')
    if (!req.file) {
      return res.status(400).send()
    }

    db.registerProfileUrl(req.user.id, req.file.location, conn)
      .then(() => {
        res.status(201).send()
      })
      .catch(e => console.log(e.message))
  }
)

module.exports = router
