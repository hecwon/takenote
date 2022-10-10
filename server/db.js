const mysql = require('mysql2');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'takenote'
});

const db = Promise.promisifyAll(connection);

db.connectAsync()
.then(()=> {
  console.log('MySQL connected');
})
.catch((err) => {
  console.log(err);
})

module.exports = db;