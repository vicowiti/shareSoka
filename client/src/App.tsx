import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import SelectRoomPage from "./components/SelectRoomPage";
import { io, Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "./types/socketClientTypes";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:4000"
);

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  function joinRoom() {
    if (username && room) {
      socket.emit("join_room", { username, room });
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route
          path="/select"
          element={
            <SelectRoomPage
              setUsername={setUsername}
              username={username}
              room={room}
              setRoom={setRoom}
              socket={socket}
            />
          }
        />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
