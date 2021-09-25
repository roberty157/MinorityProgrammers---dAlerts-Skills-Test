const router = require('express').Router();

const {Alert} = require('../../models');

router.get('/',async(req,res)=>{
    try{
        const alertData = await Alert.findAll();
        res.status(200).json(alertData);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;