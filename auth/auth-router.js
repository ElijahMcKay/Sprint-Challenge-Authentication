const router = require('express').Router();
const authenticate = require('./authenticate-middleware'); 
const jwt = require('jsonwebtoken'); 
const secrets = require('../config/secrets'); 

//model imports
const Users = require('./auth-model'); 

//security imports
const bcrypt = require('bcryptjs'); 

router.post('/register', (req, res) => {
  // implement registration
  const body = req.body; 

  // hashing password
  const hash = bcrypt.hashSync(body.password, 12); 
  body.password = hash; 

  Users.addUser(body)
    .then(user => {
      res.status(201).json(user); 
    })
    .catch(err => {
      res.status(500).json(err); 
    })
});

router.post('/login', authenticate, (req, res) => {
  // implement login
  const { username, password } = req.body; 

  // generating JWT when middleware authenticates user 
  const token = generateToken(req.body); 

  // sending json web token and Welcome message
  res.status(201).json({ message: `Welcome back, ${username}!`, token}); 

  // Users.findUser({ username })
  //   .first()
  //   .then(user => {
  //     generateToken
  //     res.status(201).json({ message: `Welcome back, ${user.username}!`, token}); 
  //   })
  //   .catch(err => {
  //     res.status(500).json(err);  
  //   })
});

// creating function to generate JWT for frontend auth
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secrets.jwtSecret, options); 
}

module.exports = router;
