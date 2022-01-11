var router = require("express").Router();
const knex = require("../config/knex");

// router.get("/checkoutpage", (req, res) => {
//   console.log("checkoutpage");
//   knex
//     .raw(
//       `INSERT INTO Reservation (cid,dfid,rfid,qty,cardnum,cardmonth,cardyear)
//         VALUES (${req.body.cid},${req.body.dFlight},${req.body.rFlight},${req.body.qty},${req.body.CreditCardNumber},${req.body.CardMonth},${req.body.CardYear})`
//     )
//     .then((result) => {
//       res.send(result[0]);
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// });

router.post("/checkoutpage", (req, res) => {
  console.log("checkoutpage");
  knex
    .raw(
      `SELECT available
        FROM Flight
        WHERE FID IN (${req.body.dFlight},${req.body.rFlight})`
    )
    .then((result1) => {
      console.log("result1==========>\n\n\n", result1[0]);
      if (result1[0].every((record) => record.available > 0)) {
        knex
          .raw(
            `INSERT INTO Reservation (cid,dfid,rfid,qty,cardnum,cardmonth,cardyear)
              VALUES (${req.body.cid},${req.body.dFlight},${req.body.rFlight},${req.body.qty},${req.body.CreditCardNumber},${req.body.CardMonth},${req.body.CardYear})`
          )
          .then((result2) => {
            knex
              .raw(
                `SELECT ordernum
            FROM Reservation
            WHERE CID = ${req.body.cid}
            ORDER BY ordernum DESC`
              )
              .then((result3) => {
                res.send({
                  reservationDetails: result2[0],
                  orderNumber: result3[0],
                });
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
      } else {
        res.send({ message: "Sold Out! Try Different Date." });
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

module.exports = router;
