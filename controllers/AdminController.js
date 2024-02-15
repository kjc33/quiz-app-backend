const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/AdminModel");

const registerAdmin = async (req, res) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const admin = await Admin.create({
      email: req.body.email,
      password: hashedPassword,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    });

    res.status(201).json(admin);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while registering the admin.");
  }
};

const loginAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!admin) {
      return res.status(400).send("Admin not found.");
    }

    const validPassword = await bcrypt.compare(req.body.password, admin.password);
    if (!validPassword) {
      return res.status(400).send("Invalid password.");
    }

    const token = jwt.sign({ id: admin.id, first_name: admin.first_name, last_name: admin.last_name }, process.env.TOKEN_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while logging in.");
  }
};

const verifyToken = async (req, res) => {
  res.status(200).send({ message: "Token is valid." });
};

module.exports = {
  registerAdmin,
  loginAdmin,
  verifyToken,
};
