const mongoose = require('mongoose');
let product = new mongoose.Schema({
    imageUrl:{
      type: String,
    },
    name:{
      type: String,
    },
    price:{
      type:Number
    }
})
module.exports = mongoose.model('products',product)