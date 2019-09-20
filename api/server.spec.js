//importing server and supertest
const request = require('supertest'); 
const server = require('./server.js'); 


describe('server.js', () => {

    const creds = {
        username: "tim",
        password: "tim"
    }

    const newCreds = {
        username: 'gracie', 
        password: 'gracie',
    }

    describe(' login route ', () => {
        it('should return a status code of 201', () => { 
            return request(server).post('/api/auth/login')
                .send(creds)
                .expect(201)
        })
        it('should ')
    })

    describe('register route', () => {
        it('it should return a status of 201', () => {
            return request(server).post('/api/auth/register')
                .send(newCreds)
                .expect(201) 
        })
    })
})