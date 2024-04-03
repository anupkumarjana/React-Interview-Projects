import "./App.css";
import Header from "./components/Header";
import ProductFilter from "./components/ProductFilter";
import Products from "./components/Products";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/product", element: <Products /> },
      { path: "/login", element: <ProductFilter /> },
    ],
  },
]);

export default App;
