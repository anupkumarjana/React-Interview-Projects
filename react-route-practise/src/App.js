import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { createBrowserRouter, Outlet } from "react-router-dom";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
const About = lazy(() => import("./Components/About"));
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
        element: (
          <Suspense fallback=<h1>Loading...</h1>>
            {/* // without fallback it will throw error */}
            <About />
          </Suspense>
        ),
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
