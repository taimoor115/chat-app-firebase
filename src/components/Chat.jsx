import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Chat = ({ room, name }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = collection(db, "message");
  const navigate = useNavigate("/");

  useEffect(() => {
    const queryMessage = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(queryMessage, (snapshot) => {
      let message = [];
      snapshot.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessages(message);
    });

    return () => unsubscribe();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(messageRef, {
      text: message,
      createdAt: serverTimestamp(),
      user: name,
      room,
    });
    setMessage("");
  };

  const loggedOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      console.log("logged out");
    });
  };
  return (
    <div className="mt-4 lg:h-[600px] h-full w-[500px] m-auto lg:w-[700px] flex flex-col rounded-lg items-center border-2 border-black">
      <div className="flex w-full justify-around bg-black">
        <p className="text-center p-4 font-bold text-4xl text-white">
          Welcome to {room}
        </p>
        <button
          className="bg-black p-2 rounded-md m-2  font-bold text-white"
          onClick={loggedOut}
        >
          Logged Out
        </button>
      </div>
      <div className="h-[530px] w-full p-2 overflow-y-scroll overflow-x-hidden">
        {messages.map((message) => (
          <div key={message.id}>
            <span className="font-bold">{message.user}</span>
            <span className="overflow-x-scroll">{`: ${message.text}`}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-end bg-black w-full">
        <input
          type="text"
          className="p-2 h-14 w-96 lg:w-full lg:h-full md:w-full md:h-full rounded-b-lg border bg-white text-black outline-none"
          placeholder="Type Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-zinc-950 p-2 rounded-md w-24 m-2 hover:bg-black font-bold text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
