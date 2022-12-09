import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import SelectRoomPage from "./components/SelectRoomPage";
import { io, Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "./types/socketClientTypes";
import Chat from "./components/Chat";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:4000"
);

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

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
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
