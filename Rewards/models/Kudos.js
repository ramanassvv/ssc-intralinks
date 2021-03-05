const Sequelize = require("sequelize")
const db = require("../db.js")

module.exports = db.sequelize.define('kudos',{
    from_id:{
        type: Sequelize.STRING,
        primaryKey: true,
    },
    to_id:{
        type: Sequelize.STRING
    },
    comments:{
        type: Sequelize.STRING
    }
},{
    timestamps: false,
    freezeTableName:true
}
);

