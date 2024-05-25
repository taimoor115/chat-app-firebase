import React from "react";
import { useRef, useState } from "react";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const ref = useRef(null);
  const navigate = useNavigate();
  const nameRef = useRef(null);

  const loggedOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      console.log("logged out");
    });
  };
  console.log(name);
  return (
    <>
      {room ? (
        <div>
          <Chat room={room} name={name} />
        </div>
      ) : (
        <>
          <div className="flex p-2 justify-between">
            <h1 className="font-bold text-3xl p-4 text-center">
              Chat Application
            </h1>
            <button
              onClick={loggedOut}
              className="bg-zinc-950 p-3 rounded-md hover:bg-black text-white"
            >
              Sign Out
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setRoom(ref.current.value);
              setName(nameRef.current.value);
            }}
            className="flex flex-col  w-full gap-3 items-center justify-center"
          >
            <label htmlFor="name" className="font-bold">
              Enter Name
            </label>
            <input
              ref={nameRef}
              type="text"
              className="w-44 p-2 rounded-md border bg-gray-200"
              required
            />
            <label htmlFor="room" className="font-bold">
              Enter Room ID:
            </label>
            <input
              ref={ref}
              type="text"
              className="w-44 p-2 rounded-md border bg-gray-200"
              required
            />
            <button
              type="submit"
              className="bg-zinc-950 p-3 rounded-md hover:bg-black text-white"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Home;