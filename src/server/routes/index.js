"use strict";
exports.__esModule = true;
var express = require("express");
var chirps_1 = require("./chirps");
var router = express.Router();
router.use('/chirps/', chirps_1["default"]);
exports["default"] = router;
