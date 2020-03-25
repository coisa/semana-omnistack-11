const crypto = require('crypto');

const connection = require('../Db/Connection');

module.exports = {
    async listAll() {
        return await connection('ongs').select('*');
    },

    async create(
        name,
        email,
        whatsapp,
        city,
        uf
    ) {
        const id = crypto.randomBytes(4).toString('HEX');

        const [ insertedId ] = await connection('ongs').insert({
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