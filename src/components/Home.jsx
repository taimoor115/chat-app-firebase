import React from "react";
import { useRef, useState } from "react";
import Chat from "./Chat";

const Home = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const ref = useRef(null);
  const nameRef = useRef(null);

  console.log(name);
  return (
    <>
      {room ? (
        <div>
          <Chat room={room} name={name} />
        </div>
      ) : (
        <>
          <h1 className="font-bold text-3xl p-4 text-center">
            Chat Application
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setRoom(ref.current.value);
              setName(nameRef.current.value);
            }}
            className="flex flex-col  w-full h-[200px] gap-3 items-center justify-center"
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
          )
        </>
      )}
    </>
  );
};

export default Home;
