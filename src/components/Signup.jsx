import Input from "./Input";
import app from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast("Account have created");

  const createUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password).finally(() => {
      notify();
      setName("");
      setEmail("");
      setPassword("");
      e.target.reset();
    });
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
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

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
