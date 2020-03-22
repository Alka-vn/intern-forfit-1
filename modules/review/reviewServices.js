const db = require('../../models');
const addReview = async (params) => {
    let details ={
        _id=params._id,
        merchant_rating = params.merchant_rating,
        vendor_rating = params.vendor_rating,
        comments = params.comments,
        customer_delivery_confirmation = params.customer_delivery_confirmation,
        customer_delivery_confirmation_ts = params.customer_delivery_confirmation_ts,
        customer_id = params.customer_id
    };
    let data = await db.Merchant.insertMany(details);
    return data;
};

module.exports = {
    addReview
};