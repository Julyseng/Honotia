require('dotenv').config()
const express = require('express')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

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

router.post('/upload', upload.single('profileImg', 3), (req, res) => {
  console.log(req.body)
  console.log(req.file)
  //req.file.location will have the url to access the image
  res.send(req.file.location)
})

module.exports = router
