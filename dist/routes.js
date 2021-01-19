"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _logRequests = require('./app/middlewares/logRequests'); var _logRequests2 = _interopRequireDefault(_logRequests);
var _marvelController = require('./app/service/marvelController'); var _marvelController2 = _interopRequireDefault(_marvelController);

const routes = new (0, _express.Router)();

routes.use(_logRequests2.default);

routes.get('/', (req, res) => {
    res.send('Rota principal');
});

routes.get('/personagens', _marvelController2.default.index);
routes.get('/personagens/:id', _marvelController2.default.show);

exports. default = routes;