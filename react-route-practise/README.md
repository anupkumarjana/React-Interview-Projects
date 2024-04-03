# React Routes and Code Splitting Practise

## Used the routes with `createBrowserRouter`, `RouterProvider`, `Outlet`, `useParams()`

```javascript
// In App.js

import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
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
```

```javascript
// In index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { appRouter } from "./App";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

## Code splitting with `lazy()` and `suspense`.

```javascript
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
const About = lazy(() => import("./Components/About")); // this is dynamic import for lazy load/ code-spliting

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
```
