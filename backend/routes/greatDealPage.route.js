var router = require("express").Router();
const knex = require("../config/knex");

router.get("/greatdealpage", (req, res) => {
  console.log("greatdealpage");
  knex
    // .raw(
    //   `SELECT fid, fnumber, fdate, ftime, orig, dest, class, price
    //     FROM Flight
    //     WHERE find_in_set(fid,${req.body.fids})
    //     AND fdate = ${req.body.dDate}
    //     ORDER BY ftime`
    // )
    .raw(
      `SELECT fid, fnumber, fdate, ftime, orig, dest, class, price
        FROM Flight`
    )
    .then((result1) => {
      // knex
      //   .raw(
      //     `SELECT title, state
      //   FROM City
      //   WHERE cityid = ${req.body.Orig}  UNION SELECT title, state
      //   FROM City
      //   WHERE cityid = ${req.body.Dest};`
      //   )
      //   .then((result2) => {
      //     res.send({ flightDetails: result1[0], cityDetails: result2[0] });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     throw err;
      //   });

      res.send({ flightDetails: result1[0] });

    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

module.exports = router;
