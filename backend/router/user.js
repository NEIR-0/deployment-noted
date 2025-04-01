const express = require("express");
const ControllerUser = require("../controllers/userControllers");
const router = express.Router();

router.post("/", ControllerUser.createUser);

module.exports = router;
