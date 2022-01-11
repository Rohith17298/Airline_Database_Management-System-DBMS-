const bookshelf = require("../config/bookshelf");
const customer = require("./customer.model");
const flight = require("./flight.model");
var reservation = bookshelf.Model.extend({
  tableName: "Reservation",
  fk1: function () {
    return this.belongsTo(customer, "cid", "cid");
  },
  fk2: function () {
    return this.belongsTo(flight, "dfid", "fid");
  },
  fk3: function () {
    return this.belongsTo(flight, "rfid", "fid");
  },
});
module.exports = reservation;
