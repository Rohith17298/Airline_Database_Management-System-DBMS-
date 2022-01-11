const bookshelf = require("../config/bookshelf");
const city = require("./city.model");
var flight = bookshelf.Model.extend({
  tableName: "Flight",
  fk1: function () {
    return this.belongsTo(city, "orig", "cityid");
  },
  fk2: function () {
    return this.belongsTo(city, "dest", "cityid");
  }
});
module.exports = flight;
