const express = require('express');
const path = require('path');
const conn = require('./config/connection');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//for back end, make api routes for post an alert
//get alert information
//get alert/:id
//update user infromation
app.get("/api/alerts", (req,res)=>{
  db.Alert.find((error, found)=>{
    if(error) {
      console.log(error);
    }else {
      res.json(found);
    }
  })
})


conn.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        
    });
});


