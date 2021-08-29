const express = require('express')
const router = express.Router()
const coinController = require('../controller/coinController')

  router.post("/savecn", coinController.saveCoin);
  
  router.get("/getCoin", coinController.getCoin);
  
  router.delete("/deletecn", coinController.deleteCoin);

module.exports = router