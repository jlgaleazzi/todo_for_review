var mysql = require('mysql')
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'BambiN070',
  database:'todos',

});

connection.connect();

function getTodos(callback) {
 var query = 'SELECT * from `todos`;'
 connection.query(query, (err,results,fields)=> {
   if (err) {
     callback(err,null);
   } else {
     callback(null,results)
   }
 })
}
  
function addTodo(todo,callback) {
  var query = 'INSERT INTO `todos` (`todo`) VALUES("'+todo+'");';
  connection.query(query,(err,results,fields) => {
    if (err) {
      callback(err,null);
    } else { 
      callback(null,results);
    }
  })
}

module.exports = {
  getTodos,
  addTodo
}
