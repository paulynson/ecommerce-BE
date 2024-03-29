const mongoose = require('mongoose') ;

const cartSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [{
        productId: {type: String}, 
        quantity: { type: Number, default: 1}
    }],
    amount: { type: Number, required: true},
    address: { type: Object, required: true},
     status: { type: String, default: "pending" }
}, {timestamps: true}) ;

const cart = mongoose.model('Users', cartSchema) ;

module.exports = cart ;
