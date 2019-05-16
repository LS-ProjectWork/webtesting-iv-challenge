const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
    it('should return 200 status', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
})

describe('POST /', () => {
    it('should return 200 status', () => {
        const state = {state: 'Georgia'}
        return request(server)
            .post('/')
            .send(state)
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
    it('should return JSON', () => {
        const state = {state: 'Florida'}
        return request(server)
            .post('/')
            .send(state)
            .then(res => {
                expect(res.type).toBe('application/json')
            })
    })
})

describe('DELETE /', () => {
    it('should return 200 status', () => {
        return request(server)
            .delete('/:id')
            .send({id: 1})
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
    it('should return JSON', () => {
        return request(server)
            .delete('/:id')
            .send({id: 1})
            .then(res => {
                expect(res.type).toBe('application/json')
            })
    })
})