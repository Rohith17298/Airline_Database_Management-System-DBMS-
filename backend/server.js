const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const homePage = require("./routes/homePage.route");
const loginPage = require("./routes/loginPage.route");
const greatDealPage = require("./routes/greatDealPage.route");
const checkoutPage = require("./routes/checkoutPage.route");
// const dbConnection = require("./config/db.config");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

app.use("/", [homePage, loginPage, greatDealPage, checkoutPage]);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
