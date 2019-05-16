const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
    it('should return 200 status', () => {
        return request(server)
            .get('/')
            .expect(200)
    })
})