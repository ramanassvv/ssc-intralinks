const Sequelize = require('sequelize')
const db={}

const sequelize = new Sequelize('rewards_recognizations','root','syam0884',{
    host:"localhost",
    dialect:'mysql',
    operatorsAliases:false
});

// var con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Iamgourav@199720",
//     database:"rewards_recognizations",
//     multipleStatements:true
// });

// con.connect((err) => {
//     if(err) throw err;
//     console.log("Connected to Database!");
//     con.query('Select *from employee',function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//       });
//     });


db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports=db;