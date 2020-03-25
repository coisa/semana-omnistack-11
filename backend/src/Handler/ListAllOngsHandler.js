const OngService = require('../Service/OngService');

module.exports = async (request, response) => {
    const ongs = await OngService.listAll();

    console.log('Listing ONGs:', ongs);

    return response.json(ongs);
};
