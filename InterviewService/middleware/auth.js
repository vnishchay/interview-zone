// a middleware to verify the json token recived during the requests and if correct let them access 
// else show them unauthorized 
const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  console.log("middleware is called !!!! ")
  const token =req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token"); 
  }
  return next();
};

module.exports = verifyToken;