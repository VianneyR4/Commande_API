'use strict';

const { json } = require('body-parser');

module.exports = {
    redOn: (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send('<h1>The red light is ON</h1>');
    },
    redOff: (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send('<h1>The red light is OFF</h1>');
    },
}