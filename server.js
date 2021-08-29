
const path = require('path')
const express = require("express");
const app = express();
const db = require("mongoose");
const cors = require("cors");
const coinRoutes = require('./Routes/coinRoutes.js')

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

// if ( process.env.NODE_ENV == "production"){

//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// }

app.use(coinRoutes)
