const express = require("express");
const { v4: uuidv4 } = require('uuid');

const websocket_router = express.Router();
websocket_router.ws('/', (ws, req) => {
    ws.send("Połączono z websocketem!");
    ws.on('message', function(msg) {
        console.log(msg);
    });
    ws.on('close', function() {
        console.log("Rozłączono");
    });
})

const routers = express.Router();
routers.use("/websocket", websocket_router);

const api = express.Router();
api.use("/api/v1", routers);

module.exports = {
    api,
};
