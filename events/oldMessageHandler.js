const {getListOfMessages } = require("../database/message_db_operations");

function oldmessages (socket){
    socket.on("oldmessages", async ({ page,limit }) => {
        const mslist = await getListOfMessages({ page:page, limit:limit });
        socket.emit("oldmesssagesrecieved",mslist);
      });
}

module.exports = oldmessages;