var express = require('express');
var login = express.Router();
const cors = require('cors')
const Employee = require("../models/Employee");

const db = require("../db.js")


const sequelize = require("sequelize")

login.use(cors())


login.post('/login',(req, res) => {
    console.log(req.body.emp_id)
    Employee.findOne({
        where:{
            emp_id:req.body.emp_id
        }
    }).then( employee => {
        if(employee){
            res.send(employee)
        }else{
            res.status(400).json({error:'Employee id does not exist'})
        }
    }).catch( err => {
        res.json({
            error:err
        })
    });
})

login.get(`/team-members/:dept_no`,(req,res)=>{
    // console.log('hi')
    const dept_no=req.params.dept_no;
   
    db.sequelize.query(`select e.emp_id,e.emp_name,r.role_name,d.dept_name from employee e join department d on d.dept_no=e.dept_no join role r on e.role_no=r.role_no where e.dept_no=${dept_no}`, { type: sequelize.QueryTypes.SELECT})
    .then(result=>{
        if(result){
        res.send(result)
        }else{
            res.status(400).json({error:'Cant fetch team members'})
        }
        }).catch( err => {
            res.json({
                error:err
                })
            })
    })

    login.get(`/employee-info/:emp_id`,(req,res)=>{
        console.log('employee info')
        const emp_id=req.params.emp_id;
        db.sequelize.query(`select e1.emp_name as name,dept_name as department,e2.emp_name as manager_name,e2.emp_id as manager_id from employee e1 join
         department d on e1.dept_no=d.dept_no join employee e2 on e2.dept_no=d.dept_no 
         where e2.role_no=2 and e1.dept_no=e2.dept_no and e1.emp_id='${emp_id}'`, { type: sequelize.QueryTypes.SELECT})
        .then(result=>{
            if(result){
            res.send(result)
            }else{
                res.status(400).json({error:'Cant fetch employee info'})
            }
            }).catch( err => {
                res.json({
                    error:err
                    })
                })
        })



module.exports = login ;
