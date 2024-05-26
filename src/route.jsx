import { createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import GoBack from "./components/GoBack";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/home", element: <Home /> },
  { path: "/back", element: <GoBack /> },
]);

export default router;
