var express = require('express');
var router = express.Router();
var reservation = require("../controllers/reservationController");
var user = require("../controllers/usersController")

// lien vers page reservation
router.get("/", reservation.create);

//creer une reservation
router.post("/save", reservation.save);

//creer une liste
router.get("/liste", reservation.list);


//export du module router
module.exports = router;
