import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"; 

import User from "./components/User/User"; 

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // 👈 Header + Footer will live inside Layout
    children: [
      {
        index: true,        // 👈 default route ("/")
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userid",
        element: <User />,
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
