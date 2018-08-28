const database = require("./database-connection");

module.exports = {
    listAuthors() {
        return database("author");
    },
    readAuthors(id) {
        return database("author")
            .select()
            .where("id", id)
            .first();
    },
    createAuthors(author) {
        return database("author")
            .insert(author)
            .returning("*")
            .then(record => record[0]);
    },
    updateAuthors(id, author) {
        return database("author")
            .update(author)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    deleteAuthors(id) {
        return database("author")
            .delete()
            .where("id", id);
    },
    listBooks() {
        return database("book");
    },
    readBooks(id) {
        return database("book")
            .select()
            .where("id", id)
            .first();
    },
    createBooks(book) {
        return database("book")
            .insert(book)
            .returning("*")
            .then(record => record[0]);
    },
    updateBooks(id, book) {
        return database("book")
            .update(book)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    deleteBooks(id) {
        return database("book")
            .delete()
            .where("id", id);
    },
    readBoth() {
        return database("book_auth")
            .join(
                "book",
                "book_auth.bookId",
                "=",
                "book.id"
            )
            .join(
                "author",
                "book_auth.authorId",
                "=",
                "author.id"
            )
            .select({
                bookId: "book.id",
                Title: "book.Title",
                Genre: "book.Genre",
                // Description: "book.Description",
                CoverUrl: "book.CoverUrl",
                FirstName: "author.FirstName",
                LastName: "author.LastName",
                // Biography: "author.Biography",
                // Portrait: "author.Portrait"
            });
    },
};