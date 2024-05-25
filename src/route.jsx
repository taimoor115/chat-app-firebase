import { createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

export default router;
