var router = require("express").Router();
const knex = require("../config/knex");

router.get("/homepage", (req, res) => {
  console.log("home");
  knex
    .raw(
      `SELECT cityid, title, state
    FROM City
    ORDER BY title, state;`
    )
    .then((result) => {
      res.send({ res: result[0] });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

router.post("/homepage/search", (req, res) => {
  console.log('homepage search'+JSON.stringify(req))
  knex
    .raw(
      `SELECT fid, fnumber, fdate, ftime, orig, dest, class, price
        FROM Flight
        WHERE ORIG = ${req.body.Orig} AND DEST = ${req.body.Dest} 
        AND fdate = ${req.body.dDate}
        ORDER BY ftime`
    )
    .then((result1) => {
      knex
        .raw(
          `SELECT title, state
        FROM City
        WHERE cityid = ${req.body.Orig}  UNION SELECT title, state
        FROM City
        WHERE cityid = ${req.body.Dest};`
        )
        .then((result2) => {
          res.send({ flightDetails: result1[0], cityDetails: result2[0] });
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

router.post("/homepage/search/returnflights", (req, res) => {
  console.log("home/search/returnflights");
  knex
    .raw(
      `SELECT G.fid, G.fnumber, G.fdate, G.ftime, G.orig, G.dest,
      G.class, G.price 
      FROM Flight F, Flight G
WHERE F.FID = ${req.body.dFlight}
AND F.ORIG=G.DEST
AND F.DEST=G.ORIG AND G.fdate = ${req.body.rDate}
ORDER BY F.ftime`
    )
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

module.exports = router;
