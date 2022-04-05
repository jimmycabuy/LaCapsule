var express = require('express');
var router = express.Router();

var avatar = [{
    image: "/images/boss.svg"
  },
  {
    image: "/images/boy.svg"
  },
  {
    image: "/images/girl-1.svg"
  },
  {
    image: "/images/girl-2.svg"
  },
  {
    image: "/images/girl-3.svg"
  },
  {
    image: "/images/girl.svg"
  },
  {
    image: "/images/man-2.svg"
  },
  {
    image: "/images/man.svg"
  },

]

var request = require('sync-request');

router.get('/', function (req, res, next) {
  var requete = request("GET", "https://jsonplaceholder.typicode.com/users");
  var resultWS = JSON.parse(requete.body);
  console.log(resultWS[0].company.name)
  res.render('index', {
    resultWS: resultWS,
    avatar: avatar,
  });
});

router.get('/messages', function (req, res, next) {
  var id = req.query.userId;
  var requete2 = request("GET", `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  var resultWS2 = JSON.parse(requete2.body);
  res.render('posts', {
    resultWS2: resultWS2,
    id: id,
  });
});

router.get('/commentaires', function (req, res, next) {
  var id = req.query.postId;
  var requete3 = request("GET", `https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  var resultWS3 = JSON.parse(requete3.body);
  res.render('commentaires', {
    resultWS3: resultWS3,
    id: id,
  });
});

module.exports = router;