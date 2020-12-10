'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routers/apiRouter').router;
const cors = require('cors');

const server = express();

server.use(cors());

// body-parser config ...
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// configer routes ...
server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>The server is running</h1>');
});
server.use('/api/v1/', apiRouter);

// launch server ...
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('Server running at: localhost:' + port);
})