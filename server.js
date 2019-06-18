const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/omnibees"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("App is running on port " + port);
});
