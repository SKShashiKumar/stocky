const path = require('path')
const express = require("express");
const app = express();
const db = require("mongoose");
const cors = require("cors");
const CoinImport = require("./models/coins");

require('dotenv').config()

const dbUrl = process.env.MONGO_URL;

db.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(process.env.PORT || 8000);
    console.log(`Server running`);
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if ( process.env.NODE_ENV == "production"){

  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.post("/savecn", (req, res) => {
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

app.get("/getCoin", async (req, res) => {
  CoinImport.find({}, (err, result) => {
    if(err){
      res.send(err)
    } else {
      res.send(result)
    }
  })
});

app.post("/deletecn", (req, res) => {
  const id = req.body.id;

  CoinImport.deleteOne({ id })
    .then(() => {
      console.log(`Deleted ${id}`);
    })
    .catch((err) => console.log(err.name));
});
