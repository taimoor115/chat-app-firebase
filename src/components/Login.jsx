import Input from "./Input";
import app from "../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { notify } from "./Notify";
import { useState } from "react";

const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        setUser(user);
        notify("Log in Successfull");
      })
      .catch((error) => {
        error && notify(error.message);
      });
  };

  const login = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
        setEmail("");
        setPassword("");
        e.target.reset();
      })
      .catch((error) => {
        error && notify(error.message);
      })
      .finally(() => notify("Login Successfully"));
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
          <button
            onClick={<Login />}
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
