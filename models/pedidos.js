/*const { DataTypes} = require('sequelize')

const db = require('../db/conn')



const User = require('./User')


const pedido = db.define('pizzas',{
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
    massas_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
      },
      bordas_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
      },
      
})

pedido.belongsTo(User)
User.hasMany(pedido)



module.exports = pedido*/