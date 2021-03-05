const Sequelize = require("sequelize")
const db = require("../db.js")

module.exports = db.sequelize.define('employee',{
    emp_id:{
        type: Sequelize.STRING,
        primaryKey: true,
    },
    emp_name:{
        type: Sequelize.STRING
    },
    dept_no:{
        type: Sequelize.INTEGER
    },
    role_no:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
    freezeTableName:true
}
);

