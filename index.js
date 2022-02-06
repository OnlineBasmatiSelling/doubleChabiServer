var express = require('express');
var app = new express();
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
var uniqid = require('uniqid');

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb+srv://gourav:BPPiQ76BIJYIcM6X@cluster0.2assr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use("/", router);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var cron = require('node-cron');

db.once('open', function() {
    
    app.get("/getProducts", async function(req,res){
        
        let promoDetails = await promo.find({userId:req.query.userId,date:{$lt:new Date(req.query.date)}}).limit(10).sort({ $natural: -1 });
        res.json({statusCode:200, list:promoDetails });
    })

    const PORT = process.env.PORT || 80;

    io.on('connection', (socket) => {
        console.log('a user connected');
      });

    app.listen(PORT, function () {
        console.log('Listening to Port 80');
    });
});