const express = require("express");

const { Login } = require("../controllers/Auth.controller");

const router = express.Router();

router.route("/login").post(Login);

module.exports = router;
