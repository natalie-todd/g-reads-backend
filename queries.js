const database = require("./database-connection");

module.exports = {
    listAuthors() {
        return database("author");
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
                Description: "book.Description",
                CoverUrl: "book.CoverUrl",
                FirstName: "author.FirstName",
                LastName: "author.LastName",
                Biography: "author.Biography",
                Portrait: "author.Portrait"
            });
    },
};