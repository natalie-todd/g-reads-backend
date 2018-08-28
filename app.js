const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = parseInt(process.env.PORT || 3000);
const queries = require("./queries.js");
const cors = require("cors");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.get("/authors", (request, response, next) => {
    queries
        .listAuthors()
        .then(author => {
            response.json({ author });
        })
        .catch(next);
});

app.get("/authors/:id", (request, response, next) => {
    queries
        .readAuthors(request.params.id)
        .then(author => {
            author
                ? response.json({ author })
                : response.status(404).json({ message: "Not found" });
        })
        .catch(next);
});

app.get("/bookauth", (request, response, next) => {
    queries
        .readBoth(request.params.id)
        .then(book_auth => {
                response.json({ book_auth })
        })
        .catch(next);
});

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));