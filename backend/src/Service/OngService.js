const crypto = require('crypto');

const connection = require('../Db/Connection');

const table = connection('ongs');

module.exports = {
    async listAll () {
        return await table.select('*');
    },

    async create (
        name,
        email,
        whatsapp,
        city,
        uf
    ) {
        const id = crypto.randomBytes(4).toString('HEX');

        const [insertedId] = await table.insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return insertedId;
    }
};
