const router = require("express").Router();
const passengerController = require("../controllers/passenger-controller");

router.get("/:id", passengerController.getPassengerById);

module.exports = router;
