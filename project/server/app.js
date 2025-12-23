require('dotenv').config({ path : './database/mysql.env'});
const express = require('express');
const path=require("path");
const app = express();
const bookRouter = require('./router/book_router.js');

// 미들웨어
app.use(express.json()); // application/json

app.use(express.static(path.join(__dirname, 'public')));

// 라우터 등록
app.use('/api', bookRouter);

app.listen(3000, ()=>{
  console.log('Server Start');
  console.log('http://localhost:3000');
})

// 라우팅
// app.get('/', (req, res)=>{
//   res.send('Welcome!!');
// })