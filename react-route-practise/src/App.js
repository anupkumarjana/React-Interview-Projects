import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Users from "./Components/Users";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users/:id",
        element: <UserProfile />,
      },
    ],
  },
]);

export default App;
