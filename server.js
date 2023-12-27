const express = require("express");
const app = express();
const logger = require("./logger");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
