const {saveMessage } = require("../database/message_db_operations");

function liveMessageHandler(socket){
    socket.on("livemessage", async ({ content, name }) => {
        console.log("Live...");
        await saveMessage({
          sendBy: name,
          content: content,
        });
        socket.broadcast.emit("newmessage", {
          content,
          sendBy: name,
        });
      });

}

module.exports = liveMessageHandler;