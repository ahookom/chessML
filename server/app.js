const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'));

app.listen(3000, ()=>{
  console.log('listening on port 3000');
});

app.use(function(err,req,res,next){
  if(!err)res.status(404).send();
  else res.status(500);
})

module.exports = app;
