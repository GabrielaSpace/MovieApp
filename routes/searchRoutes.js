const express = require('express');
const searchCrontrolers = require('../controllers/searchControllers');
const searchRouter = express.Router();

searchRouter.get('/', searchCrontrolers.getSearch);
searchRouter.get('/:title', searchCrontrolers.getSearchForTitle);
searchRouter.post('/', searchCrontrolers.postFilmForm);

module.exports = searchRouter