const express = require('express');
const path = require('path');
//const conn = require('./config/connection');
const db = require('./config/connection');

const cors = require('cors');
const mongoose = require('mongoose');
//const db = require('./models');
//const routes = require('./controllers');
const app = express();

//const router = require('express').Router();
const PORT = process.env.PORT || 3001;

app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
*/


//for back end, make api routes for post an alert
//get alert information
//get alert/:id
//update user infromation
/*
router.route('/api/alerts').get((req,res)=>{
  db.Alert.find()
    .then(alerts =>res.json(alerts))
    .catch(err=>res.status(400).json('Error: '+err));
});
*/
/*
app.get("/api/alerts", (req,res)=>{
  db.Alert.find((error, found)=>{
    if(error) {
      console.log(error);
    }else {
      res.json(found);
    }
  })
})
*/
//const alertsRouter = require('./routes/alerts');
//app.use('/alerts',alertsRouter);

//app.use(routes)


const alertsRouter = require('./routes/alerts');
app.use('/alerts',alertsRouter);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        
    });
});


