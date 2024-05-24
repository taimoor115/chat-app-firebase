import React from "react";
import { EyeFill, Google } from "react-bootstrap-icons";
import Input from "./Input";

const Signup = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="container h-[500px] w-[350px] md:w-[500px] lg:w-[500px] bg-red-300 text-white rounded-2xl">
        <div className="font-bold text-4xl mt-4 p-3 text-white">Welcome!</div>
        <div>
          <form action="" className="flex flex-col gap-4 items-center mt-4">
            <Input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg w-3/4 bg-slate-100"
            />

            <Input
              type="email"
              className="p-3 rounded-lg w-3/4  bg-pink-50"
              placeholder="Email"
            />
            <Input
              type="password"
              className="p-3 rounded-lg w-3/4  bg-pink-50"
              placeholder="Password"
            />
          </form>
        </div>
        <div className="flex justify-center mt-5 ">
          <button
            className="bg-red-400 text-white m hover:bg-red-500 font-bold px-4 py-3 w-[300px] rounded-lg mt-4"
            type="submit"
          >
            Register
          </button>
        </div>

        <div className="text-center text-white font-bold mt-2">
          Or log in with
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-amber-300 text-black hover:bg-amber-400 font-bold px-4 py-3 w-[300px] rounded-lg mt-2"
          >
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
