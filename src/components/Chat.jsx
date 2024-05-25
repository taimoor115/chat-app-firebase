import React, { useEffect } from "react";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

const Chat = ({ room }) => {
  const [message, setMessage] = useState("");
  const messageRef = collection(db, "message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(message);
    await addDoc(messageRef, {
      text: message,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setMessage("");
  };

  return (
    <div>
      <h1 className="text-center p-4 font-bold text-3xl">Enjoy Chatting</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          className="p-2 w-52 border bg-gray-100"
          placeholder="Type Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-zinc-950 p-3 rounded-md w-32 m-2 hover:bg-black text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
