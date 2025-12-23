const mysql = require('mysql');
const sqlList = require('./sqls/books.js');

const connectionPool = mysql.createPool({
  host : process.env.MYSQL_HOST,
  port : process.env.MYSQL_PORT,
  user : process.env.MYSQL_USER,
  password : process.env.MYSQL_PWD,
  database : process.env.MYSQL_DB,
  connectionLimit : process.env.MYSQL_LIMIT,
  debug : true
});

const query = (alias, values)=>{
  return new Promise((resolve, reject)=>{
    let executeSql = sqlList[alias];
    connectionPool.query(executeSql, values, (err, results)=>{
      if(err) {
        reject({err});
      }else{
        resolve(results);
      }
    });
  });
};

module.exports = {
  query,
}