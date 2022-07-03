const express = require('express');
const router = express.Router();
const subscriber = require('../model/subs')

// Getting all
router.get('/',async(req,res)=>{
    try{
        const subsData = await subscriber.find();
        res.json(subsData);
    }
    catch(err){
        res.status(500).json({message : err.message })
    }
    
})

// Getting one
router.get('/:id',getSub,(req,res)=>{
    res.json(res.subscr)
})

// Create one
router.post('/',async(req,res)=>{
    const subscribers = new subscriber({
        name : req.body.name,
        subToChannel : req.body.subToChannel,
        subDate : req.body.subDate
    })
    try{
        const newSub = await subscribers.save()
        res.status(201).json(newSub)
    }
    catch(err){
         res.status(400).json({message: err.message})
    }
})

// Update one
router.patch('/:id',getSub,async(req,res)=>{
    if(req.body.name != null){
        res.subscr.name = req.body.name
    }
    if(req.body.subToChannel != null){
        res.subscr.subToChannel = req.body.subToChannel
    }
    if(req.body.subDate != null){
        res.subscr.subDate = req.body.subDate
    }
    try{
        let updatedUsr = await res.subscr.save()
        res.json(updatedUsr)
    }catch(err){
        res.status(400).json({message: err.message})
    }
    

})

// Delete one
router.delete('/:id',getSub,async(req,res)=>{
    try{
        await res.subscr.remove()
        res.json({message : 'deleted user'})
    }catch(er){
        res.status(500).json({message : err.message})
    }

})

async function getSub(req,res,next) {
    let subscr
    try{
        subscr = await subscriber.findById(req.params.id)
        if(subscr == null){
            res.status('401').json({message : 'Connot find user'})
        }
    }catch(err){
        res.status('500').json({message : err.message})
    }
    res.subscr = subscr
    next()
}


module.exports = router;