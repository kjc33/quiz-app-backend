const Question = sequelize.define('Question', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question_name: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    answer1: {
      type: Sequelize.STRING(250)
    },
    answer2: {
      type: Sequelize.STRING(250)
    },
    answer3: {
      type: Sequelize.STRING(250)
    },
    answer4: {
      type: Sequelize.STRING(250)
    },
    answer: {
      type: Sequelize.STRING(250),
      allowNull: false
    }
  }, {
    
  });

  module.exports = { Question };