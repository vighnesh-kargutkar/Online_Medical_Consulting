const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access Denied" });
  try {
    const verified = jwt.verify(token.split(" ")[1], JWT_SECRET);
    // console.log("email:", req.query.email);
    // console.log(verified);
    if (req.query.email == verified.email) {
      next();
    } else {
      res.status(400).json({ error: "Invalid Token" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};
module.exports = authMiddleware;
