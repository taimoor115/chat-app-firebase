import Input from "./Input";
import app from "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      console.log("Success")
    );
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="container h-[500px] w-[350px] md:w-[500px] lg:w-[500px] bg-red-300 text-white rounded-2xl">
        <div className="font-bold text-4xl mt-4 p-3 text-white">Welcome!</div>
        <div>
          <form className="flex flex-col gap-4 items-center mt-4">
            <Input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg w-3/4 text-black"
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="email"
              className="p-3 rounded-lg w-3/4   text-black"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              className="p-3 rounded-lg w-3/4  text-black"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </div>
        <div className="flex justify-center mt-5 ">
          <button
            onClick={createUser}
            className="bg-red-400 text-white m hover:bg-red-500 font-bold px-4 py-3 w-[300px] rounded-lg mt-4"
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
