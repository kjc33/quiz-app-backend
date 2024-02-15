const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/conn');

const { User } = require('./UserModel')

const questionAnswerEnum = ['A', 'B', 'C', 'D'];

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  choice_1: {
    type: DataTypes.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  choice_2: {
    type: DataTypes.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  choice_3: {
    type: DataTypes.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  choice_4: {
    type: DataTypes.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  answer: {
    type: DataTypes.ENUM,
    values: questionAnswerEnum,
    allowNull: false,
  },
}, {
  tableName: 'questions',
  timestamps: false,
});

// Associations
User.hasMany(Question, {
  foreignKey: 'user_id',
  sourceKey: 'id'
});

Question.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id'
});

module.exports = { Question };