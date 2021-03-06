var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render("index");
});


app.listen(port, () => {
    console.log("app running at port " + port);
});

