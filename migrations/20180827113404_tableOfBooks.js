
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tableOfBooks', table => {
        table.increments('id').primary()
        table.text('author1FirstName')
        table.text('author1LastName')
        table.text('author1Biography')
        table.text('author1Portrait')
        table.text('author2FirstName')
        table.text('author2LastName')
        table.text('author2Biography')
        table.text('author2Portrait')
        table.text('author3FirstName')
        table.text('author3LastName')
        table.text('author3Biography')
        table.text('author3Portrait')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tableOfBooks')
};
