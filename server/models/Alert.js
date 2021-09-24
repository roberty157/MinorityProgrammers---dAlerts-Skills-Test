const { Schema ,model} = require('mongoose');

const alertSchema = new Schema({
  exchange_name :{
    type: String,
    required: true,
    trim:true,
  },
  // saved book id from teleport
  token_address: {
    type: Number,
    required: true,
    trim:true,
  },
  exchange_address: {
    type: String,
    required:true,
    trim:true,
  },
  blockchain: {
    type: String,
    trim:true,
  },
  alert_price: {
    type: String,
    required:true,
  },
  notification_type:{
    type: String,
    required:true,
    trim:true,
  },
  above_or_below:{
    type:String,
    required:true,
    trim:true,
  }
  
});

const Alert = model('Alert', alertSchema);
module.exports = Alert;