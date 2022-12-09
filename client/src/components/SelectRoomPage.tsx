import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../types/socketClientTypes";

interface SelectRoomPageProps {
  username: string;
  room: string;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
  setRoom: Dispatch<SetStateAction<string>>;
  setUsername: Dispatch<SetStateAction<string>>;
}

const SelectRoomPage = ({
  username,
  socket,
  room,
  setRoom,
  setUsername,
}: SelectRoomPageProps) => {
  const navigate = useNavigate();

  function joinRoom() {
    if (username && room) {
      socket.emit("join_room", { username, room });
      navigate("/chat", { replace: true });
    }
  }
  return (
    <div>
      <h1>SHARESOKA</h1>
      <form onSubmit={joinRoom}>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div>
          <select onChange={(e) => setRoom(e.target.value)}>
            <option>--Select Room--</option>
            <option value="countries">Countries</option>
            <option value="pl">Premier League</option>
            <option value="liga">La Liga</option>
            <option value="others">Others</option>

            <option value="pl">Premier League</option>
          </select>
        </div>

        <button type="submit">Join Room</button>
      </form>
    </div>
  );
};

export default SelectRoomPage;
