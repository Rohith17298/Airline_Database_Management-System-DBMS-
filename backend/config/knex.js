const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'rahul123',
        database: 'internetairline',
        port:3306
    }
}
const knex = require('knex')(options);
module.exports=knex;