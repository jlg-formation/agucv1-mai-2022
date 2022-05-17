console.log("About to start the server...");
var express = require("express");
var serveIndex = require("serve-index");
var app = express();
var port = 3000;
app.use(function (req, res, next) {
    console.log("req.url: ", req.ur1);
    next();
});
app.use(express.static("."));
app.use(serveIndex("."));
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
