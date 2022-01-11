const bookshelf = require("../config/bookshelf");
var customer = bookshelf.Model.extend({
  tableName: "Customer",
});
module.exports = customer;
