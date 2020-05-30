const express = require('express');
const cors = require('cors');
const apple = require('./apple.json');

const app = express();

app.get('/appleData', cors(), (req, res) =>{
    res.send(apple);
})

const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log("Rest API live on " + port)
});