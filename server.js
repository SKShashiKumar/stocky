const express = require("express");
const app = express();
const db = require("mongoose");
const port = 8000;
const cors = require("cors");
const CoinImport = require("./models/coins");

const dbUrl =
  "mongodb+srv://shashi123:1234@stocky.7yozs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

db.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port);
    console.log(`Server running on http://localhost:${port}`);
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

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
        else{ console.log("Already Exist")}y
    })
    .catch((err) => console.log(err));

});

app.post("/deletecn", (req, res) => {
  const id = req.body.id;
  console.log(`id = ${id}`);

  CoinImport.deleteOne({ id })
    .then(() => {
      console.log(`Deleted ${id}`);
    })
    .catch((err) => console.log(err.name));
});

app.get("/getCoin", (req, res) => {
  CoinImport.find()
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => console.log(err.name));
});

