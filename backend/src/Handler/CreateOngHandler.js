const OngService = require('../Service/OngService');

module.exports = async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;
    
    const id = await OngService.create(name, email, whatsapp, city, uf);

    response.status(201);

    return response.json({ id: id });
};
