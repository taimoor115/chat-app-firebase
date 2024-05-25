import Input from "./Input";
import app from "../firebase";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import Notify, { notify } from "./Notify";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const createUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setName("");
      setPassword("");
      e.target.reset();
      navigate("/");
    } catch (error) {
      error && notify(error.message);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="container h-[500px] w-[350px] md:w-[500px] lg:w-[500px] bg-red-300 text-white rounded-2xl">
        <div className="font-bold text-4xl mt-4 p-3 text-white">Welcome!</div>

        <form
          onSubmit={createUser}
          className="flex flex-col gap-4 items-center mt-4"
        >
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
          <Notify />

          <button
            className="bg-red-400 text-white m hover:bg-red-500 font-bold px-4 py-3 w-[300px] rounded-lg mt-4"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
