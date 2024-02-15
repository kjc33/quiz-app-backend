const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const { User } = require('../models/userModel');
const { authenticateJWT } = require("../middlewares/authMiddleware");

// POST - /register - register new user
router.post("/register", async (req, res) => {
  try {
    // define salt rounds
    const saltRounds = 10;

    // hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // create the user
    const user = await User.create({
      email: req.body.email,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    // send the user back
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while registering the user.");
  }
});

// POST - /login - login existing user
router.post("/login", async (req, res) => {
  try {
    // find the user
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // check if the user exists
    if (!user) {
      return res.status(400).send("User not found.");
    }

    // check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).send("Invalid password.");
    }

    // create and assign a token
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ id: user.id, firstName: user.firstName, lastName: user.lastName }, process.env.TOKEN_SECRET);
      res.status(200).send({ token });
    } else {
      res.status(400).send("Invalid password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while logging in.");
  }
});

// GET - /verifyToken - authenticate JSON Web Token Validity
router.get("/verifyToken", authenticateJWT, async (req, res) => {
  res.status(200).send({ message: "Token is valid." });
});

module.exports = router;
