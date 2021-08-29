const express = require('express')
const router = express.Router()
const CoinImport = require('../models/coins')

router.post("/savecn", (req, res) => {
    const { id, cname, symbol, market_cap, current_price } = req.body;
  
    let cnt = 0;
    CoinImport.find( {"cname":cname} ).countDocuments()
      .then((result11) => 
      {      
          if(result11 === 0)
          {
            let saveCoin = new CoinImport(
              {
                id,
                cname,
                symbol,
                market_cap,
                current_price,
              });
            saveCoin.save()
              .then((result) => console.log("Inserted"))
              .catch((err) => console.log(err));
          }
          else{ console.log("Already Exist")}
  
      })
      .catch((err) => console.log(err));
  
  });
  
  router.get("/getCoin", async (req, res) => {
    CoinImport.find({}, (err, result) => {
      if(err){
        res.send(err)
      } else {
        res.send(result)
      }
    })
  });
  
  router.delete("/deletecn", (req, res) => {
    const id = req.body.id;
    console.log(id)
  
    CoinImport.deleteOne({ id })
      .then(() => {
        console.log(`Deleted ${id}`);
      })
      .catch((err) => console.log(err.name));
  });


module.exports = router