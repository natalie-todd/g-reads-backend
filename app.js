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

app.get("/posts/:id", (request, response, next) => {
    queries
        .readPosts(request.params.id)
        .then(posts => {
            posts
                ? response.json({ posts })
                : response.status(404).json({ message: "Not found" });
        })
        .catch(next);
});

app.listen(port)
    .on("error", console.error.bind(console))
    .on("listening", console.log.bind(console, "Listening on " + port));