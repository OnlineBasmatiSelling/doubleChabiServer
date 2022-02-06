var express = require('express');
var app = new express();
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
var uniqid = require('uniqid');

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb+srv://gourav:BPPiQ76BIJYIcM6X@cluster0.2assr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});


app.use("/", router);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const product = require('./Modals/product');

db.once('open', function() {
    
    app.get("/getProducts", async function(req,res){
        
        let productList = await product.find({});
        res.json({statusCode:200, list:productList });
    })

    const PORT = process.env.PORT || 80;

    app.listen(PORT, function () {
        console.log('Listening to Port 80');
    });
});