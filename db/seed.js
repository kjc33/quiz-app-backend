const { sequelize } = require("../db/conn");
const { Question } = require("../models/questionModel");
const { User } = require("../models/userModel");

const seedDatabase = async () => {
  try {
    
    await sequelize.sync({ force: true });

        const user = await User.create({
      user_name: "some_test_user",
      score: 0,
    });

        await Question.bulkCreate([
      {
        question_name: "What is the capital of France?",
        choice_1: "Paris",
        choice_2: "London",
        choice_3: "Berlin",
        choice_4: "Madrid",
        answer: "A",
        user_id: user.id,
      },
      {
        question_name: "What is the capital of Spain?",
        choice_1: "Paris",
        choice_2: "London",
        choice_3: "Berlin",
        choice_4: "Madrid",
        answer: "D",
        user_id: user.id,
      },
      {
        question_name: "What is the capital of Germany?",
        choice_1: "Paris",
        choice_2: "London",
        choice_3: "Berlin",
        choice_4: "Madrid",
        answer: "C",
        user_id: user.id,
      },
      {
        question_name: "What is the capital of England?",
        choice_1: "Paris",
        choice_2: "London",
        choice_3: "Berlin",
        choice_4: "Madrid",
        answer: "B",
        user_id: user.id,
      },
    ]);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};

seedDatabase();
