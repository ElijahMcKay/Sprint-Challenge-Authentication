//importing server and supertest
const request = require('supertest'); 
const server = require('./server.js'); 


describe('server.js', () => {

    const creds = {
        username: "tim",
        password: "tim"
    }

    const newCreds = {
        username: `${Date.now()}`, 
        password: `${Date.now()}`,
    }

    describe(' login route ', () => {
        it('should return a status code of 201', () => { 
            return request(server).post('/api/auth/login')
                .send(creds)
                .expect(201)
        })
    })

    describe('register route', () => {
        it('it should return a status of 201', () => {
            return request(server).post('/api/auth/register')
                .send(newCreds)
                .expect(201) 
        })
    })

    describe('jokes route', () => {
        it('should return jokes', () => {
            return request(server).get('/api/jokes')
                .then(res => {
                    expect(res.body);
                })
        })
        it('should 500', () => {
            return request(server).get('/joke')
                .expect(404)
        })
    })
})