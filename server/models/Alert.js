const { Schema } = require('mongoose');

const citySchema = new Schema({
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
    type: Number,
    required:true,
  },
  notification_type:{
    type: String,
    required:true,
    trim:true,
  },
  
});

module.exports = citySchema;