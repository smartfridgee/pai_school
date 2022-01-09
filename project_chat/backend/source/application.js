const express = require("express");
const express_ws = require('express-ws');
const bodyParser = require("body-parser");
const cors = require('cors');

const application = express();
express_ws(application);

const { api } = require("./api");

application.use(cors());
application.use(bodyParser.json());
application.use(api);

module.exports = {
    application: application
};
