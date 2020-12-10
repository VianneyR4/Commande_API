'use strict';

let express = require('express');
let commandeCtrl = require('../controllers/commandeCtrl');

// router ...
exports.router = (() => {
    let apiRouter = express.Router();

    // admin router ...
    apiRouter.route('/redOn').get(commandeCtrl.redOn);
    apiRouter.route('/redOff').get(commandeCtrl.redOff);


    return apiRouter;
})();