import express from "express";
import http from "http";
import serverConfig from "./config/serverConfig";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("🚀 ~ io.on ~ socket:", socket)
  socket.on("disconnect", () => {
    
  });
});

server.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
