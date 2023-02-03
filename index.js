const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Hi there!</h2>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listining on port ${port}`));
