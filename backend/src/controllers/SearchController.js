const Dev = require('../model/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        //Buscar todos devs num raio 10km
        //Filtrar por tecnologias
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray, //retornar somentes os devs que trabalham com aquela tecnologia
            },
            location:{
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, //distancia máxima de 10km
                },
            },
        });

        return response.json({ devs });

    }
}