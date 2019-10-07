const express = require('express')
const db = require('./db.js');
const app = express()
const port = 3000
app.use(express.json());
app.use(express.static(__dirname +'/../dist'))
app.listen(port, () => console.log("Server listening on porty",port));

app.get('/todos', (req,res) => {
  db.getTodos((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

app.post('/todos', (req,res) => {
  //var todo = JSON.parse(req.body)
    db.addTodo(req.body.todo, (err,result) => {
      if (err) {
        res.send(err)
      } else {
        res.send(JSON.stringify(result));
      }
    })
})