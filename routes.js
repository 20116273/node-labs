'use strict';

import express from 'express';
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import playlist from './controllers/playlist.js';
import stats from './controllers/stats.js';
import accounts from './controllers/accounts.js';


const router = express.Router();
router.get('/start', start.createView);


//dashboard routes
router.get('/dashboard', dashboard.createView);
router.get('/sortData', dashboard.createView);
router.post('/dashboard/addplaylist', dashboard.addPlaylist);
router.get('/dashboard/deleteplaylist/:id', dashboard.deletePlaylist);
router.get('/searchCategory', dashboard.createView);
router.get('/sortData', dashboard.createView);

//about route
router.get('/about', about.createView);

//playlist routes
router.get('/playlist/:id', playlist.createView);
router.post('/playlist/:id/addsong', playlist.addSong);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);
router.post('/playlist/:id/updatesong/:songid', playlist.updateSong);

//stats route
router.get('/stats', stats.createView);
router.get('/error', (request, response) => response.status(404).end('Page not found.'));


//accounts routes
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

export default router;