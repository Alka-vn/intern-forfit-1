const mongoose = require('mongoose');
const uuidv4 = require('uuidv4');
timestamp = Timestamp();
const reviewSchema = mongoose.Schema({
    _id:{
        type: uuidv4
    },
    merchant_rating:{
        type:Number
    },
    vendor_rating:{
        type:Number
    },
    comments:{
        type:String
    },
    customer_delivery_confirmation:{
        type:Boolean
        
    },
    customer_delivery_confirmation_ts:{
        type:Date
    },

    customer_id:{
        type:uuidv4
    }
})

module.exports = reviewSchema;