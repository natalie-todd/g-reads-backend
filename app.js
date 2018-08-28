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

app.get("/books", (request, response, next) => {
    queries
        .listBooks()
        .then(book => {
            response.json({ book });
        })
        .catch(next);
});

app.get("/books/:id", (request, response, next) => {
    queries
        .readBooks(request.params.id)
        .then(book => {
            book
                ? response.json({ book })
                : response.status(404).json({ message: "Not found" });
        })
        .catch(next);
});

app.post("/book", (request, response, next) => {
    queries
        .createBooks(request.body)
        .then(book => {
            response.status(201).json({ book: book });
        })
        .catch(next);
});
app.delete("/books/:id", (request, response, next) => {
    queries
        .deleteBooks(request.params.id)
        .then(() => {
            response.status(204).json({ deleted: true });
        })
        .catch(next);
});

app.put("/books/:id", (request, response, next) => {
    queries
        .updateBooks(request.params.id, request.body)
        .then(book => {
            response.json({ book: book[0] });
        })
        .catch(next);
});

// '/books/?=by_author'

app.get("/books/author/:id", (request, response, next) => {
    queries
        .readBoth(request.params.id)
        .then(book => {
            book
                ? response.json({ book: book })
                : response.status(404).json({ message: "Not found" });
        })
        .catch(next);
});

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));