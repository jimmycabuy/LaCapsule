var express = require('express');
var router = express.Router();
var request = require('sync-request');

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
    var options = {
      json: {
        apiKey: "5c0a5d392c1745d2ae84dc0b1483bfd2",
        image: resultCloudinary.url,
      },
     };
     
     var resultDetectionRaw = await request('POST', 'https://lacapsule-faceapi.herokuapp.com/api/detect', options);
     
     var resultDetection = await resultDetectionRaw.body;
     resultDetection = await JSON.parse(resultDetection);

     if(!resultDetection.result){
      var gender = "No face detected";
      var age = "No age detected"
     } else {
       if(resultDetection.detectedFaces[0].gender === "male"){
         gender = "Homme"
        } else if(resultDetection.detectedFaces[0].gender === "female"){
          gender = "Femme"
       }
       age = resultDetection.detectedFaces[0].age + " ans";
     }
     console.log(resultDetection);
     console.log(resultDetection.result);
     console.log(age);
     console.log(gender);

    res.json({resultCloudinary, gender, age})
  } else {
    res.json({error: resultCopy})
  }

  fs.unlinkSync(pictureName);
})

module.exports = router;