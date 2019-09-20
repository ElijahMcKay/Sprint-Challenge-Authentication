//importing db config 
const db = require('../database/dbConfig'); 

// exporting models
module.exports = {
    addUser,
}

function addUser(user){
    return db('users').insert(user); 
}

function findUser(user){
    return db('user').where({ username }); 
}