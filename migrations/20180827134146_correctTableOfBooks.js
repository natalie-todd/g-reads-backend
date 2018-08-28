
exports.up = function(knex, Promise) {
    return knex.schema.createTable('book', table => {
        table.increments('id').primary()
        table.text('Title')
        table.text('Genre')
        table.text('Description')
        table.text('CoverUrl')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('book')
};
