const { Question } = require("../models/questionModel");

// GET - /api/questions - get all questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error); // Log the error
    res.status(500).json({ message: "An error occurred while getting questions." });
  }
};

// GET - /api/questions/:id - get a single question
exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id);
    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({ message: "Question not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while getting the question." });
  }
};

// POST - /api/questions - create a new question
exports.createQuestion = async (req, res) => {
  try {
    const question = await Question.create({
      question_name: req.body.question_name,
      choice_1: req.body.choice_1,
      choice_2: req.body.choice_2,
      choice_3: req.body.choice_3,
      choice_4: req.body.choice_4,
      answer: req.body.answer,
      user_id: req.body.user_id,
    });
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while creating the question." });
  }
};

// PUT - /api/questions/:id - update a question
exports.updateQuestionById = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id);
    if (question) {
      question.update({
        question_name: req.body.question_name,
        choice_1: req.body.choice_1,
        choice_2: req.body.choice_2,
        choice_3: req.body.choice_3,
        choice_4: req.body.choice_4,
        answer: req.body.answer,
      });
      res.status(200).json(question);
    } else {
      res.status(404).json({ message: "Question not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while updating the question." });
  }
};

// DELETE - /api/questions/:id - delete a question
exports.deleteQuestionById = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id);
    if (question) {
      question.destroy();
      res.status(200).json({ message: "Question deleted." });
    } else {
      res.status(404).json({ message: "Question not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while deleting the question." });
  }
};
