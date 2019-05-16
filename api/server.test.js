const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
    it('should return 200 status', () => {
        return request(server)
            .get('/')
            .expect(200)
    })
})

describe('POST /states', () => {
    it('should return 200 status', () => {
        return request(server)
            .post('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
    it('should return JSON', () => {
        return request(server)
            .post('/')
            .then(res => {
                expect(res.body).toBe('application/json')
            })
    })
})