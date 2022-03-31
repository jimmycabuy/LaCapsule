var express = require("express");
var router = express.Router();

var dataBike = [
  {
    nom: "BIKO7",
    urlImage: "/images/bike-1.jpg",
    prix: 679,
  },
  {
    nom: "ZOOK7",
    urlImage: "/images/bike-2.jpg",
    prix: 1399,
  },
  {
    nom: "LIKO89",
    urlImage: "/images/bike-3.jpg",
    prix: 799,
  },
  {
    nom: "GEWO8",
    urlImage: "/images/bike-4.jpg",
    prix: 839,
  },
  {
    nom: "KIWIT",
    urlImage: "/images/bike-5.jpg",
    prix: 1249,
  },
  {
    nom: "NASAY",
    urlImage: "/images/bike-6.jpg",
    prix: 899,
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { dataBike: dataBike });
});

router.get("/shop", function (req, res) {
  if (!req.session.dataCardBike) {
    req.session.dataCardBike = [];
  }
  var bikeAlreadyInCard = false;

  for (var i = 0; i < req.session.dataCardBike.length; i++) {
    if (req.session.dataCardBike[i].nom == req.query.nom) {
      req.session.dataCardBike[i].quantity += 1;
      bikeAlreadyInCard = true;
    }
  }

  if (bikeAlreadyInCard == false) {
    req.session.dataCardBike.push({
      nom: req.query.nom,
      prix: req.query.prix,
      urlImage: req.query.urlImage,
      quantity: 1,
    });
  }
  res.render("shop", { dataCardBike: req.session.dataCardBike });
});

router.get("/delete-shop", function (req, res) {
  req.session.dataCardBike.splice(req.query.position, 1);
  res.render("shop", { dataCardBike: req.session.dataCardBike });
});

router.post("/update-shop", function (req, res) {
  console.log(req.body);
  req.session.dataCardBike[req.body.position].quantity = req.body.quantity;
  res.render("shop", { dataCardBike: req.session.dataCardBike });
});

module.exports = router;