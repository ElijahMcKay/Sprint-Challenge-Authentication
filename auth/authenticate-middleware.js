/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const bcrypt = require('bcryptjs'); 

const Users = require('./auth-model'); 

module.exports = function restricted(req, res, next) { 
      
  Users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) { 
            next(); 
        } else {
            res.status(401).json({ message: 'Invalid Credentials' }); 
        }
    })
    .catch(err => {
        res.status(500).json(err); 
    })
}