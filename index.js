// * MongoDB for message and chatlist Storage
let db = require("./database/db_init");
db._connect();

// ! SERVER

// * Create httpServer
const httpServer = require("http").createServer();

// * Bind Socket IO With HttpServer
const io = require("./server/socketServer")({httpServer:httpServer});

// ! Initiate Connections

// * Socket IO Connection
io.on("connection", async (socket) => {
    await require("./events/connectHandler")(socket);
    require("./events/liveMessageHandler")(socket);
    require("./events/oldMessageHandler")(socket);
    require("./events/disconnectHandler")(socket);  
  });

// * Begin Listening
httpServer.listen(3000);
