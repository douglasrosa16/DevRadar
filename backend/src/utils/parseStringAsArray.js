module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim()); //Percorrer um array e remover espaços
}