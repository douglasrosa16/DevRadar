const axios = require('axios');
const Dev = require('../model/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response){
    const { github_username, techs, latitude, longitude } = request.body;
    
    let dev = await Dev.findOne({ github_username }); //Encontrar Dev by GitHubUsername

    if(!dev){ //Para cadastrar somente quando não houver o dev no Banco
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        //Continuar com o código depois de esperar a API responder
        //console.log(apiResponse.data);

    const { name = login, avatar_url, bio} = apiResponse.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }

    dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
        });


        //Filtrar as conexões que estão no máximo 10Km de distância e que o novo dev tenha pelo
        //menos uma das tecnlogias filtradas

        const sendSocketMessageTo = findConnections(
            { latitude, longitude },
            techsArray,
        )

        sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }


    return response.json(dev);
  }
};