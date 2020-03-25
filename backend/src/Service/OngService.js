const crypto = require('crypto');

const connection = require('../Db/Connection');

const table = connection('ongs');

module.exports = {
    async listAll () {
        return await table.select('*');
    },

    async create (name, email, whatsapp, city, uf) {
        const id = crypto.randomBytes(4).toString('HEX');
        const values = { id, name, email, whatsapp, city, uf };

        const [insertedId] = await table.insert(values);

        console.log('ONG created on ID:', id, 'with values:', values);

        return insertedId;
    }
};
