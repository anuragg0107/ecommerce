import React from 'react';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
// import './App.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/SignUp",
    element: <SignupPage></SignupPage>,
  },
]);
function App() {
  return (
    <div>
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
