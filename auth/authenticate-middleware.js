/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const secrets = require('../config/secrets'); 
const Users = require('./auth-model'); 

module.exports = function authenticate(req, res, next) { 

  const { username, password } = req.body; 

    const token = req.headers.authorization; 

    if(token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if(err) {
          res.status(401).json({ message: 'invalid login or token' })
        } else {
          req.user = { username: decodedToken.username }
          next(); 
        }
      })
    } else {
      res.status(400).json({ message: 'No credentials provided!' })
    }
}