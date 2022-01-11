// const bookshelf=require('../config/bookshelf');
// const branch=require('./branch');
// var students = bookshelf.Model.extend({
//     tableName: 'studentsdetails',
//     fk: function() {
//         return this.belongsTo(branch, 'bid', 'bid');
//     }
// });
// module.exports=students;

const bookshelf=require('../config/bookshelf');
var city = bookshelf.Model.extend({
    tableName: 'City'
});
module.exports=city;