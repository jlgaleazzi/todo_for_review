const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname +'/../dist'))
app.listen(port, () => console.log("Server listening on porty",port));

app.get('/todos', (req,res) => {
  console.log('get all todos from database');
  res.sendStatus(200);
})

app.post('/todos', (req,res)=> {
  console.log('add todo to databes')
  res.sendStatus(201);
})