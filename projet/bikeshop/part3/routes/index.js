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

var dataCardBike = [ ];

router.get("/", function (req, res, next) {
  res.render("index", { dataBike: dataBike });
});

router.get("/shop", function (req, res) {
  dataCardBike.push({
    nom: req.query.nom,
    prix: req.query.prix,
    urlImage: req.query.urlImage,
    quantity: 1,
  });
  res.render("shop", { dataCardBike: dataCardBike });
});

router.get("/delete-shop", function (req, res) {
  dataCardBike.splice(req.query.position, 1);
  res.render("shop", { dataCardBike: dataCardBike });
});

router.post("/update-shop", function (req, res) {
  console.log(req.body);
  dataCardBike[req.body.position].quantity = req.body.quantity;
  res.render("shop", { dataCardBike: dataCardBike });
});

module.exports = router;

// var bikeAlreadyInCard = false

// if(){

//   bikeAlreadyInCard = true
//   quantity += 1
// }
// else{
//   dataCardBike.push({ nom: req.query.nom , prix: req.query.prix, urlImage: req.query.urlImage, quantity:1 })
// }
