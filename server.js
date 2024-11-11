const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // relay the WebRTC signaling messages (offer, answer, and ICE candidates) along with socket.id
  socket.on("signal", (data) => {
    console.log("Signal received from", socket.id, ":", data);
    socket.broadcast.emit("signal", { ...data, senderId: socket.id }); // include sender's socket.id to be available to clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("signalling server is up and running on port 3000");
});
