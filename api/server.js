const knex = require('knex');
const express = require('express');

const knexConfig = require('../knexfile')
const db = knex(knexConfig.testing)

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

module.exports = server;