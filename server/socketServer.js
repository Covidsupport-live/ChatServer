
function socketServer({httpServer}){
    let io = require("socket.io")(httpServer, { cors: { origin: "*" } });
    return io;
}

module.exports = socketServer;