const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = parseInt(process.env.PORT || 3000);
const queries = require("./queries.js");
const cors = require("cors");

