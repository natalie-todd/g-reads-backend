
exports.up = function(knex, Promise) {
    return knex.schema.createTable('book_auth', table => {
        table.increments('id').primary()
        table.text('bookId')
        table.text('authorId')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('book_auth')
};
