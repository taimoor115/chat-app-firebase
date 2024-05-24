import Input from "./Input";
import app from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);

const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
  console.log(user);
};
const Login = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="container h-[500px] w-[350px] md:w-[500px] lg:w-[500px] bg-red-300 text-white rounded-2xl">
        <div className="font-bold text-4xl mt-8 p-3 text-white text-center">
          Login
        </div>
        <div>
          <form action="" className="flex flex-col gap-4 items-center mt-8">
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
        <div className="flex flex-col items-center mt-5 ">
          <button
            className="bg-red-400 text-white m hover:bg-red-500 font-bold px-4 py-3 w-[300px] rounded-lg mt-4"
            type="submit"
          >
            Login
          </button>
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
