


const router = require('express').Router();
let Alert = require('../models/Alert');

router.route('/').get((req,res)=>{
    Alert.find()
        .then(alerts =>res.json(alerts))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/add').post((req,res)=>{
    
    const newAlert = new Alert({exchange_name:req.body.exchange_name,
                                token_address:req.body.token_address,
                                exchange_address:req.body.exchange_address,
                                blockchain:req.body.blockchain,
                                notification_type:req.body.notification_type,
                                above_or_below: req.body.above_or_below,
    });
    newAlert.save()
        .then(() =>res.json('Alert added!'))
        .catch(err => res.status(400).json('Error: '+ err));
})


module.exports = router;