var express = require('express');
var feedbacks = express.Router();
const cors = require('cors')
const Factors = require("../models/Factors");
//const Feedbacks = require("../models/Feedback");
 
const db = require("../db.js")
 
const sequelize = require("sequelize")
 
feedbacks.use(cors())
 
feedbacks.get(`/get-factors`,(req,res)=>{
    // console.log('jj')   
    Factors.findAll({
    where:{
        award_type:['som' ]

    }
    }).then(result=>{
            if(result){
                res.send(result)
            }else{
                res.status(400).json({error:'Cant fetch factors'})
            }
    }).catch( err=> {
            res.json({error:err })
    })
 })
 
feedbacks.post(`/submit-feedbacks`,(req,res)=>{
    console.log('submitting feedbacks')

    //console.log(req.body.feedbacks)
    let feedbackRow=[]
    let j=0;
    for(let j=0;j<req.body.feedbacks.length;j++){
        let feedbackColumn=[]
        //feedbackColumn.push('E06002');
        //feedbackColumn.push('E06003');
        //feedbackColumn.push('team work');
        //feedbackColumn.push(1);
        //feedbackColumn.push('good');
        //feedbackColumn.push('som');
        feedbackColumn.push(req.body.feedbacks[j].from_id)
        feedbackColumn.push(req.body.feedbacks[j].to_id)
        // feedbackColumn.push('team work');
        //console.log(req.body.feedbacks[j].factor_name)e se
        feedbackColumn.push(req.body.feedbacks[j].factor_name)
        feedbackColumn.push(req.body.feedbacks[j].rating)
        feedbackColumn.push(req.body.feedbacks[j].reason)
        feedbackColumn.push(req.body.feedbacks[j].award_type)
         feedbackRow.push(feedbackColumn)
    }
 
    db.sequelize.query({query:`insert into feedback (from_id,to_id,factor,rating,reason,award_type) values ?`,values:[feedbackRow]})
    .then(result=>{  
        console.log("hi");  
        if(result){
             res.send(result)
        }else{
            res.status(400).json({error:'Cant post feedbacks'})
        }
        }).catch( err=> {
            console.log(err);
            res.json({
                
                 error:err
            })
        })
 })
 
module.exports = feedbacks ;

