const { Schema, model } = require('mongoose');

//const alertSchema = require('./Alert');

const userSchema = new Schema({
    wallet: {
      type: String,
      trim: true,
    },
    numAlerts: {
      type: Number,
    },
    alertIds: [String],
  },
    {
      toJSON: {
        virtuals: true,
      },
    },
  );


const User = model('User', userSchema);
module.exports = User;