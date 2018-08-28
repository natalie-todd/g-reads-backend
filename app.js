const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = parseInt(process.env.PORT || 3000);
// const queries = require("./queries.js");
const cors = require("cors");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.get("/author/:id", (request, response, next) => {
    queries
        .readAuthor(request.params.id)
        .then(author => {
            author
                ? response.json({ author })
                : response.status(404).json({ message: "Not found" });
        })
        .catch(next);
});

app.get("/book/:id", (request, response, next) => {
    queries
        .readBook(request.params.id)
        .then(book => {
            book
                ? response.json({ book })
                : response.status(404).json({ message: "Not found" });
        })
        .catch(next);
});

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));