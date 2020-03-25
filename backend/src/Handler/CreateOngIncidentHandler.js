const OngIncidentService = require('../Service/OngIncidentService');

module.exports = async (request, response) => {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const id = await OngIncidentService.create(ong_id, title, description, value);

    response.status(201);

    return response.json({ id });
};
