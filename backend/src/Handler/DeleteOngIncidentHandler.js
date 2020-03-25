const OngIncidentService = require('../Service/OngIncidentService');

module.exports = (request, response) => {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    try {
        OngIncidentService.delete(ong_id, id);
    } catch (exception) {
        return response.status(401).send();
    }

    return response.status(204).send();
};
