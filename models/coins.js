const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coinSchema = new Schema(
    {
        id : {
            type : Number,
            required : true,
            unique : true
        },
        cname : {
            type : String,
            required : true,
            unique : true
        },
        symbol : {
            type : String,
            required : true,
            unique : true
        },
        market_cap : {
            type : Number,
            required : true
        },
        current_price : {
            type : Number,
            required : true
        }
    }
) 

const coin = mongoose.model('coin', coinSchema)

module.exports = coin
