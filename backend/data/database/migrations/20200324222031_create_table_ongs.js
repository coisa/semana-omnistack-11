/** @var knex db */
exports.up = db => {
    return db.schema.createTable('ongs', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = db => {
    return db.schema.dropTable('ongs');
};
