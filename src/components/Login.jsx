import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider(auth);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    if (result.user) {
      navigate("/home");
    }
  };

  const login = async (e) => {
    e.preventDefault();

    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    navigate("/home");
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="container h-[500px] w-[350px] md:w-[500px] lg:w-[500px] bg-red-300 text-white rounded-2xl">
        <div className="font-bold text-4xl mt-8 p-3 text-white text-center">
          Login
        </div>
        <div>
          <form
            onSubmit={login}
            className="flex flex-col gap-4 items-center mt-8"
          >
            <Input
              type="email"
              className="p-3 rounded-lg w-3/4  text-black"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              className="p-3 rounded-lg w-3/4  text-black"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-red-400 text-white m hover:bg-red-500 font-bold px-4 py-3 w-[300px] rounded-lg mt-4"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center mt-5 ">
          <Link to="/signup">
            <button
              className="bg-red-400 text-white m hover:bg-red-500 font-bold px-4 py-3 w-[300px] rounded-lg mt-4"
              type="submit"
            >
              Register
            </button>
          </Link>
        </div>

        <div className="text-center text-white font-bold mt-2">
          Or log in with
        </div>
        <div className="flex justify-center">
          <button
            onClick={signInWithGoogle}
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

export default Login;
