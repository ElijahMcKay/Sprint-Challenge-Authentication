//importing db config 
const db = require('../database/dbConfig'); 

// exporting models
module.exports = {
    addUser,
    findUser
}

function addUser(user){
    return db('users').insert(user); 
}

function findUser(username){
    console.log('test'); 
    const user = db('users').where({ username }); 
    console.log({ username }); 
    return user; 
}