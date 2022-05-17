console.log("About to start the server...");

import express from "express";
import serveIndex from "serve-index";
import { api } from "./api";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req.url: ", req.url);
  next();
});

app.use("/api", api);

app.use(express.static("."));
app.use(serveIndex("."));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
