var express = require('express');
var router = express.Router();

var cloudinary = require('cloudinary').v2;

cloudinary.config({
 cloud_name: 'dlwwftewi',
 api_key: '512472239962297',
 api_secret: '1ZTMd435-c8C_-2ohJtXLHSUhJU' 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var uniqid = require('uniqid');
var fs = require('fs');

/* UPLOAD new picture on Cloudinary. */
router.post('/upload', async function(req, res, next) {
  var pictureName = './tmp/'+uniqid()+'.jpg';
  var resultCopy = await req.files.avatar.mv(pictureName)  
  // console.log(req.files.avatar.name)
  if (!resultCopy) {
    var resultCloudinary = await cloudinary.uploader.upload(pictureName);
    res.json(resultCloudinary)
  } else {
    res.json({error: resultCopy})
  }
  fs.unlinkSync(pictureName);
})

module.exports = router;