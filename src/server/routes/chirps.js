"use strict";
exports.__esModule = true;
var express = require("express");
var chirpstore_1 = require("../chirpstore");
var router = express.Router();
router.get("/:id?", function (req, res) {
    var id = req.params.id;
    if (id) {
        res.json(chirpstore_1["default"].GetChirp(id));
    }
    else {
        res.send(chirpstore_1["default"].GetChirps());
    }
});
router.post("/", function (req, res) {
    chirpstore_1["default"].CreateChirp(req.body);
    res.sendStatus(200);
});
router.put("/:id", function (req, res) {
    var id = req.params.id;
    chirpstore_1["default"].UpdateChirp(id, req.body);
    res.sendStatus(200);
});
router["delete"]("/:id", function (req, res) {
    var id = req.params.id;
    chirpstore_1["default"].DeleteChirp(id);
    res.sendStatus(200);
});
exports["default"] = router;
