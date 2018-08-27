
exports.up = function(knex, Promise) {
    return knex.schema.createTable('correctTableOfBooks', table => {
        table.increments('id').primary()
        table.text('bookTitle')
        table.text('bookGenre')
        table.text('bookDescription')
        table.text('bookCoverUrl')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('correctTableOfBooks')
};
