/** @var knex db */
exports.up = db => {
    return db.schema.createTable('ong_incidents', table => {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = db => {
    return db.schema.dropTable('ong_incidents');
};
