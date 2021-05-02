function disconnectHandler(socket){
    socket.on("disconnect", async () => {
        console.log("Disconnected.....");
      });
}

module.exports = disconnectHandler;