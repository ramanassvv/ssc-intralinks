var express = require('express');
var kudos = express.Router();
const cors = require('cors')

const Kudos = require("../models/Kudos");
const db = require("../db.js")

const sequelize = require("sequelize")


kudos.use(cors())


kudos.post('/kudos',(req,res)=>{
    Kudos.build({
        from_id:req.body.from_id,
        to_id:req.body.to_id,
        comments:req.body.comments
    }).save()
    .then(kudos=>{
        if(kudos){
        res.send(kudos)
    }else{
        res.status(400).json({error:'Failed to send kudos'})
    }
    }).catch( err => {
        res.json({
            error:err
            })
        }) //catch end
})//post end



kudos.get(`/kudos-list/:dept_no/:emp_id`,(req,res)=>{
    // console.log('hi')
    const dept_no=req.params.dept_no;
    const emp_id=req.params.emp_id;
    console.log(dept_no)
    db.sequelize.query(` select e1.emp_name as sender,d1.dept_name as sender_dept,k.comments as comments,e2.emp_name as receiver,d2.dept_name as receiver_dept from kudos k join employee e2 on e2.emp_id=k.to_id 
    join department d2 on e2.dept_no=d2.dept_no
     join employee e1 on e1.emp_id=k.from_id 
     join department d1 on e1.dept_no=d1.dept_no where e2.dept_no=${dept_no} and e2.emp_id!='${emp_id}'`, { type: sequelize.QueryTypes.SELECT})
    .then(result=>{
        if(result){
        res.send(result)
        }else{
            res.status(400).json({error:'No kudos'})
        }
        }).catch( err => {
            res.json({
                error:err
                })
            })
    })
 

    kudos.get(`/kudos-received/:emp_id`,(req,res)=>{
        console.log('hi')
        const id=req.params.emp_id;
        console.log(id)
        db.sequelize.query(` select e.emp_name as sender,k.comments from kudos k join employee e on e.emp_id=k.from_id  where k.to_id='${id}'`, { type: sequelize.QueryTypes.SELECT})
        .then(result=>{
            if(result){
            res.send(result)
            }else{
                res.status(400).json({error:'No kudos'})
            }
            }).catch( err => {
                res.json({
                    error:err
                    })
                })
        })




module.exports = kudos



