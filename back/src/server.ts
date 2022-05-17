console.log("About to start the server...");

const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req.url: ", req.ur1);
  next();
});

app.use(express.static("."));
app.use(serveIndex("."));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
