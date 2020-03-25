const OngIncidentService = require('../Service/OngIncidentService');

module.exports = async (request, response) => {
    const ongIncidents = await OngIncidentService.listAll();

    console.log('Listing ONG Incidents:', ongIncidents);

    return response.json(ongIncidents);
}