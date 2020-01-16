const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express(); //Criando aplicação

mongoose.connect('mongodb+srv://admin:admin@omnistack-iaqzb.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json()); //Para o app reconhecer requisições .json
app.use(routes); //Todas as rotas da aplicação estão ligadas ao routes
app.listen(3333);//localhost:3333 (minha porta)
//Métodos HTTP: GET, POST, PUT, DELETE
//Query Params: request.query (Filtros, ordenação, paginação,...) - GET
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)


                