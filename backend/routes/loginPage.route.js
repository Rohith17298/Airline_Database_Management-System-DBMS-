var router = require("express").Router();
const knex = require("../config/knex");

router.post("/loginpage", (req, res) => {
  console.log("loginpage");
  knex
    .raw(
      `SELECT cid, cname, email, password, address
        FROM Customer
        WHERE lower(email) = ${req.body.email} AND password = ${req.body.password};`
    )
    .then((result) => {
      res.send({ res: result[0] });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

router.post("/loginpage/checkemail", (req, res) => {
  console.log("loginpage/checkemail");
  knex
    .raw(
      `SELECT cid, email, password
          FROM Customer
          WHERE lower(email) = ${req.body.email};`
    )
    .then((result) => {
      res.send({ res: result[0] });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

router.post("/loginpage/signup", (req, res) => {
  console.log("loginpage/signup");
  knex
    .raw(
      `INSERT INTO Customer (cname,email,address,password)
      VALUES (${req.body.CustomerName},${req.body.Email},
      ${req.body.CustomerAddress},${req.body.Password})`
    )
    .then((result) => {
      res.send({ res: result[0] });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

module.exports = router;
