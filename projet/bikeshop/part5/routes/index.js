var express = require("express");
var router = express.Router();

var dataBike = [
  {
    nom: "COWBOY",
    urlImage: "/images/bike-1.jpg",
    prix: 2400,
  },
  {
    nom: "GIANT",
    urlImage: "/images/bike-2.jpg",
    prix: 1300,
  },
  {
    nom: "SCOTT",
    urlImage: "/images/bike-3.jpg",
    prix: 1900,
  },
  {
    nom: "TREK",
    urlImage: "/images/bike-4.jpg",
    prix: 4100,
  },
  {
    nom: "VAN MOOF",
    urlImage: "/images/bike-5.jpg",
    prix: 2500,
  },
  {
    nom: "ANGELL",
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

router.get("/success", (req, res) => {
  res.render("success");
});

router.get("/cancel", (req, res) => {
  res.render("cancel", { dataBike: dataBike });
});

const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51Kjg24BLyzrvNXfaMCGvN29tCIKzFBMNLyinhcXzodFuaDLHbh0Gu8FIqwLHU1zrQwB738zMj9e9SSGEJUQXbcgX00w5v18rKt"
);

router.post("/create-checkout-session", async (req, res) => {
  if (!req.session.dataCardBike) {
    req.session.dataCardBike = [];
  }
  var stripeCard = [];

  for (var i = 0; i < req.session.dataCardBike.length; i++) {
    stripeCard.push({
      price_data: {
        currency: "eur",
        product_data: {
          name: req.session.dataCardBike[i].nom,
        },
        unit_amount: req.session.dataCardBike[i].prix * 100,
      },
      quantity: req.session.dataCardBike[i].quantity,
    });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: stripeCard,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.redirect(303, session.url);
});

module.exports = router;
