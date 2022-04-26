var express = require('express');
const {
  status
} = require('express/lib/response');
var router = express.Router();
var articleModel = require('../models/articles');
var orderModel = require('../models/orders');
var userModel = require('../models/users');

/* GET home page. */
router.get('/', async function (req, res, next) {
  var emptyStocks = await articleModel.find({
    stock: 0
  });
  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  res.render('index', {
    emptyStocks,
    user
  });
});

/* GET tasks page. */
router.get('/tasks-page', async function (req, res, next) {
  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  var taskList = user.tasks;
  console.log(taskList)
  res.render('tasks', {
    taskList
  });
});

/* GET Messages page. */
router.get('/messages-page', async function (req, res, next) {
  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  var messageList = user.messages;
  res.render('messages', {
    messageList
  });
});

/* GET Users page. */
router.get('/users-page', async function (req, res, next) {
  var userList = await userModel.find();
  res.render('users', {
    userList
  });
});

/* GET Catalog page. */
router.get('/catalog-page', async function (req, res, next) {
  var articleList = await articleModel.find({
    status: "customer"
  });
  res.render('catalog', {
    articleList
  });
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function (req, res, next) {
  var orderList = await orderModel.find();
  res.render('orders-list', {
    orderList
  });
});

/* GET Order detail page. */
router.get('/order-page', async function (req, res, next) {
  var orderDetail = await orderModel.findById(
    req.query.id
  ).populate('articles').exec();
  res.render('order', {
    orderDetail
  });
});

/* GET chart page. */
router.get('/charts', async function (req, res, next) {
  var userList = await userModel.find();

  var nbHommes = 0;
  var nbFemmes = 0;

  for (var i = 0; i < userList.length; i++) {
    if (userList[i].gender == "male") {
      nbHommes += 1;
    } else if (userList[i].gender == "female") {
      nbFemmes += 1;
    }
  }

  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  var messageList = user.messages;

  var readMessage = 0;
  var unreadMessage = 0;

  for (var i = 0; i < messageList.length; i++) {
    if (messageList[i].read == true) {
      readMessage += 1;
    } else if (messageList[i].read == false) {
      unreadMessage += 1;
    }
  }

  var orderList = await orderModel.find();
  var orderPaidAndShipped = 0;
  var orderPaidAndNotShipped = 0;

  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].status_payment == "validated" && orderList[i].status_shipment == true) {
      orderPaidAndShipped += 1;
    } else if (orderList[i].status_payment == "validated" && orderList[i].status_shipment == false) {
      orderPaidAndNotShipped += 1;
    }
  }

  var aggr = orderModel.aggregate();

  aggr.match({
    status_payment: "validated"
  });

  aggr.group({
    _id: {
      year: {
        $year: '$date_insert'
      },
      month: {
        $month: '$date_insert'
      }
    },
    CA: {
      $sum: '$total'
    }
  });

  aggr.sort({
    _id: 1
  });

  var totalCAByMonth = await aggr.exec();

  res.render('charts', {
    nbFemmes,
    nbHommes,
    readMessage,
    unreadMessage,
    orderPaidAndShipped,
    orderPaidAndNotShipped,
    totalCAByMonth
  });
});

module.exports = router;