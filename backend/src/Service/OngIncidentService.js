const connection = require('../Db/Connection');

const table = connection('ong_incidents');

module.exports = {
    async listAll () {
        return await table.select('*');
    },

    async create (ong_id, title, description, value) {
        const values = { ong_id, title, description, value };

        const [insertedId] = await table.insert(values);

        console.log('ONG Incident created on ID:', id, 'with values:', values);

        return insertedId;
    },

    async delete (id, ong_id) {
        const incident = await table.select('ong_id')
            .where('id', id)
            .first();

        if (incident.ong_id !== ong_id) {
            throw new Error('Unauthorized');
        }

        await table.where('id', id).delete();
    }
};
