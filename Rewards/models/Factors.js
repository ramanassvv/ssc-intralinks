const Sequelize = require("sequelize")
const db = require("../db.js")

module.exports = db.sequelize.define('reward_factors',{
    factor_name:{
        type: Sequelize.STRING,
        primaryKey: true,
    },
    award_type:{
        type: Sequelize.STRING
    }
    
},{
    timestamps: false,
    freezeTableName:true
}
);

