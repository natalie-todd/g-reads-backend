
exports.up = function(knex, Promise) {
    return knex.schema.createTable('author', table => {
        table.increments('id').primary()
        table.text('FirstName')
        table.text('LastName')
        table.text('Biography')
        table.text('Portrait')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('author')
};
