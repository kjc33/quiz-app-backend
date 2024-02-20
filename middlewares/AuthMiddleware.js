const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Split "Bearer <token>"

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: "Token expired" });
        } else {
          return res.status(401).json({ message: "Invalid token" });
        }
      } else {
        req.admin = {
          id: decoded.id,
          email: decoded.email,
        };
        next();
      }
    });    
  } else {
    return res.status(401).json({ message: "Token not found" });
  }
};

module.exports = {
  authenticateJWT,
};