const { Router } = require('express'); //para importar algo específico do express
const axios = require('axios'); //Importando API do GitHub
//const Dev = require('./model/Dev')
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router(); 

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index)

module.exports = routes; //para exportar as rotas daqui de dentro
