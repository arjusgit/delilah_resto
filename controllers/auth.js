const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.autenticarToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("⛔️ Usuario no autorizado");
  jwt.verify(token, process.env.TOKEN_SECRETO, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

exports.autenticarAdmin = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("⛔️ Usuario no autorizado");
  jwt.verify(token, process.env.TOKEN_SECRETO, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user.rolId !== 1) {
      res.status(401).send("⛔️ Usuario no autorizado");
    }
    else {
        req.user = user;
        next();
    }    
  });
};
