// biblioteca pra criar o servidos
const express = require('express');

// função das rotas da aplicação
const routes = express.Router();

// importando o arquivo controller
const ProfileController = require('./controllers/ProfileController');
const JobController = require('./controllers/JobController');
const DashboardController = require('./controllers/DashboardController');

// index ADM
routes.get('/', DashboardController.index);
// adicionar jobs
routes.get('/job', JobController.create);
routes.post('/job', JobController.save);
routes.get('/job/:id', JobController.show);
routes.post('/job/:id', JobController.update);
routes.post('/job/delete/:id', JobController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.update);

routes.get('/prop', (req, res) => res.render('prop'));
routes.get('/edit-prop', (req, res) => res.render('edit-prop'));
routes.get('/platform', (req, res) => res.render('platform'));

routes.get('/job', (req, res) => {
	return response.redirect('/job.html');
});

module.exports = routes;
