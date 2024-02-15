// const { sequelize } = require('../db/conn');
// const { DataTypes } = require('sequelize');

// // define the "user" model
// const User = sequelize.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     email: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: DataTypes.STRING(255),
//         allowNull: false
//     },
//     firstName: {
//         type: DataTypes.STRING(45),
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING(45),
//         allowNull: false
//     },
//     created_at: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW
//     }
// }, {
//     tableName: 'users',
//     timestamps: false
// });

// // create the table
// User.sync();

const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    score: {
      type: Sequelize.INTEGER
    }
  }, {
    // options
  });
  
module.exports = { User };