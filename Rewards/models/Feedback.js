const Sequelize = require("sequelize")
const db = require("../db.js")
 
module.exports = db.sequelize.define(`feedback`,{
    from_id:{
        type: Sequelize.STRING,
        primaryKey: true,
    },
    to_id:{
        type: Sequelize.STRING
    },
    factor:{
        type: Sequelize.STRING,
        references: 'rewards_factors', // <<< Note, its table's name, not object name
        referencesKey: 'factor_name'
    },
    rating:{
        type: Sequelize.INTEGER
    },
    reason:{
        type: Sequelize.STRING
    },
        award_type:{
        type: Sequelize.STRING
    }
    },{
        timestamps: false,
        freezeTableName:true
    }
);