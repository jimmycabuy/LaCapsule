var express = require("express");
var router = express.Router();

var dataBike = [
  {
    nom: 'BIKO7',
    urlImage:'/images/bike-1.jpg',
    prix:'679€'
  },
  {
    nom: 'ZOOK7',
    urlImage:'/images/bike-2.jpg',
    prix:'1399€'
  },
  {
    nom: 'LIKO89',
    urlImage:'/images/bike-3.jpg',
    prix:'799€'
  },
  {
    nom: 'GEWO8',
    urlImage:'/images/bike-4.jpg',
    prix:'839€'
  },
  {
    nom: 'KIWIT',
    urlImage:'/images/bike-5.jpg',
    prix:'1249€'
  },
  {
    nom: 'NASAY',
    urlImage:'/images/bike-6.jpg',
    prix:'899€'
  }
];

var dataCardBike = [
  {
    nom: 'BIKO7',
    urlImage:'/images/bike-1.jpg',
    prix: 679,
    quantity: 3
  },
  {
    nom: 'ZOOK7',
    urlImage:'/images/bike-2.jpg',
    prix: 1399,
    quantity: 1
  },
  {
    nom: 'LIKO89',
    urlImage:'/images/bike-3.jpg',
    prix: 799,
    quantity: 3
  }
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "BikeShop - Home", dataBike: dataBike });
});

router.get("/shop", function (req, res, next) {
  res.render("shop", { title: "BikeShop - Shop", dataCardBike: dataCardBike });
});

module.exports = router;