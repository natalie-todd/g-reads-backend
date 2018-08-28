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

app.post("/authors", (request, response, next) => {
    queries
        .createAuthors(request.body)
        .then(author => {
            response.status(201).json({ author: author });
        })
        .catch(next);
});
app.delete("/authors/:id", (request, response, next) => {
    queries
        .deleteAuthors(request.params.id)
        .then(() => {
            response.status(204).json({ deleted: true });
        })
        .catch(next);
});

app.put("/authors/:id", (request, response, next) => {
    queries
        .updateAuthors(request.params.id, request.body)
        .then(author => {
            response.json({ author: author[0] });
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