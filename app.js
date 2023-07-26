const express = require("express");
const app = express();

app.get("/", (request, responce) => {
  const date = new Date();
  responce.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});
module.exports = app;
