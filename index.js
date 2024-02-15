const express = require("express");
const { testConnection } = require("./db/conn");
const cors = require("cors");
const { sequelize } = require("./db/conn");
const UserRoutes = require("./routes/UserRoutes");
const QuestionRoutes = require("./routes/QuestionRoutes");
const AdminRoutes = require("./routes/AdminRoutes");

let authenticateJWT;
try {
  authenticateJWT = require("./middlewares/AuthMiddleware").authenticateJWT;
} catch (error) {
  console.error("Error importing AuthMiddleware:", error);
}

const app = express();
const PORT = 8080;

testConnection();
app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.send("OK");
});

if (authenticateJWT) {
  app.get("/protected", authenticateJWT, (req, res) => {
    res.send("This is a protected route");
  });
} else {
  console.error("authenticateJWT middleware not available.");
}

// Use routes
app.use("/api/users", UserRoutes);
app.use("/api/questions", QuestionRoutes);
app.use("/", AdminRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
