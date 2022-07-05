const express = require("express");
const { getLatest } = require("../controllers/app.controller");

const route = express.Router();

route.get("/latest", getLatest);

module.exports = { appRoute: route };
