import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const roomHandler = (socket : Socket) => {

    const createRoom = () => {
        const roomId  = uuidv4();
        socket.join(roomId); 
        socket.emit("roomCreated", {roomId});
    }

    const joinRoom = (roomId : string) => {
        console.log("Room Joined")
    }

    socket.on("createRoom", createRoom);
    socket.on("joinRoom" , joinRoom)
}
export default roomHandler;