const mongoose = require('mongoose');

const db = require('../models');

mongoose.connect('mongodb://localhost/dAlert', {
    useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const dAlertSeed = [
    {
        exchange_name:'sushi',
        token_address:'pancake swap',
        exchange_address:'1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
        blockchain:'$0.62',
        alert_price:'$0.60',
        notification_type:'DISCORD',
        above_or_below:'below'
    },
    {
        exchange_name:'pickle',
        token_address:'quick swap',
        exchange_address:'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
        blockchain:'$1.41',
        alert_price:'$1.35',
        notification_type:'TWITTER',
        above_or_below:'above'

    },
    {
        exchange_name:'INV',
        token_address:'sushi swap',
        exchange_address:'3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
        blockchain:'$0.71',
        alert_price:'$1.03',
        notification_type:'WEB',
        above_or_below:'below'
    }
  
];

db.Alert.deleteMany({})
  .then(() => db.Alert.collection.insertMany(dAlertSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });