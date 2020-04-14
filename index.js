const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
//mongoose.connect('mongodb://myninjago:bitnami@192.168.1.201/ninjago?authSource=ninjago',
//    {
//        useNewUrlParser: true, 
//        useUnifiedTopology: true,
//        useFindAndModify: false,
//        useCreateIndex:true
//    });

mongoose.connect('mongodb+srv://myninjago:bitnami@cluster0-iqd5r.mongodb.net/ninjago?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('now listening for requests at port ' + port);    
})






