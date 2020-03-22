const express = require('express');
const router = express.Router();
const { validate } = require('../middlewares/validator');
const verifyRequest = require('../middlewares/verifyrequest');
const {
    review
} = require('../modules/review/reviewController.js');
const uuidv4 = require('uuidv4');
var _id;

router.post('/review',(req,res)=>{
    if(req.body.customer_delivery_confirmation == 'Y' ||  req.body.customer_delivery_confirmation == 'y'){
        _id = uuidv4();
        next(review);
    }
    else{
        console.log("error order not delivered")
    }
});
module.exports = router;
