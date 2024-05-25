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
import { db } from "../firebase";
import { auth } from "../firebase";

const Chat = ({ room, name }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = collection(db, "message");

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

  return (
    <div className="mt-2 h-[600px] m-auto w-[700px] flex flex-col rounded-lg items-center border-2 border-black">
      <p className="text-center w-full p-4 font-bold text-4xl text-white bg-black">
        Welcome to {room}
      </p>

      <div className="h-[530px] w-full p-2 overflow-y-scroll overflow-x-hidden">
        {messages.map((message) => (
          <div>
            <span className="font-bold">{message.user}</span>
            <span className="overflow-x-scroll">{`: ${message.text}`}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-end bg-black w-full">
        <input
          type="text"
          className="p-2 w-full h-full rounded-b-lg border bg-white text-black outline-none"
          placeholder="Type Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-zinc-950 p-2 rounded-md w-24 m-2 hover:bg-black text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
