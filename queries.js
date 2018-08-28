const database = require("./database-connection");

module.exports = {
    readAuthor(id) {
        return database("author")
            .join(
                "book_auth",
                "author.id",
                "=",
                "book_auth.authorId"
            )
            .select({
                author_id: "author.id",
                country_id: "country.id",
                profile_id: "author.profile_id",
                country_name: "author.country_name",
                goal_date: "author.goal_date",
                activities: "author.activities",
                visited: "author.visited",
                latitude: "country.latitude",
                longitude: "country.longitude"
            })
            .where("author.id", id)
            .first();
    },
    readAuthor(id) {
        return database("book")
            .join(
                "book_auth",
                "book.id",
                "=",
                "book_auth.authId"
            )
            .select({
                author_id: "author.id",
                country_id: "country.id",
                profile_id: "author.profile_id",
                country_name: "author.country_name",
                goal_date: "author.goal_date",
                activities: "author.activities",
                visited: "author.visited",
                latitude: "country.latitude",
                longitude: "country.longitude"
            })
            .where("book.id", id)
            .first();
    },
}