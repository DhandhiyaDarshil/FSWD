// Import necessary modules and components
import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

// Create a socket connection to the server
const socket = io.connect("http://localhost:3001");

// Define the main App component
function App() {
  // Define state variables for username, room, and chat visibility
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  // Function to join a chat room
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      // Emit a "join_room" event to the server
      socket.emit("join_room", room);
      // Show the chat component
      setShowChat(true);
    }
  };

  // Render the App component
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          {/* Input field for username */}
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          {/* Input field for room ID */}
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          {/* Button to join a room */}
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        // Render the Chat component if showChat is true
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

// Export the App component as the default export
export default App;
