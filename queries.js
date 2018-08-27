const database = require("./database-connection");

module.exports = {
    readPosts(id) {
        return database("author")
            .join(
                "book",
                "author.id",
                "=",
                "book.id"
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
}