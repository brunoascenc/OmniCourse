const express = require('express');
const devcontroll = require('./controllers/devcontroll');
const likecontroll = require('./controllers/likecontroll');
const dislikecontroll = require('./controllers/dislikecontroll');

const routes = express.Router();

routes.get('/devs', devcontroll.index)
routes.post('/devs', devcontroll.store)

routes.post('/devs/:devId/likes', likecontroll.store);
routes.post('/devs/:devId/dislikes', dislikecontroll.store);

module.exports = routes;