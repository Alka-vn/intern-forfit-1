const router = require('../routes');


const addReview = require('./reviewServices');
let _id = router._id;

const review = async (req,res,next) =>{
    let reviewData = req.body;
    reviewData._id = _id;
    let saveReview = await addReview(reviewData);
    if(!saveReview){
        console.log("Error Data Not entered");
        return;
    }
};