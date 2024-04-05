import { useState } from "react";
import { useProducts } from "./Hooks/useProducts";

function App() {
  const [page, setpage] = useState(1);

  const products = useProducts();
  // console.log(products);

  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10) {
      setpage(selectedPage);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center  flex-wrap gap-6 px-40 pt-10">
        {products.slice(page * 10 - 10, page * 10).map((product) => {
          return (
            <div
              key={product.id}
              className="border rounded-lg flex flex-col gap-4 p-4"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-40 h-40"
              />
              <h2>{product.title.slice(0, 10)}..</h2>
              <span>Rs. {product.price}</span>
            </div>
          );
        })}
      </div>
      {products.length > 0 && (
        <div className="flex justify-center items-center pt-10 gap-4">
          <span
            className={`cursor-pointer ${page > 1 ? "" : "opacity-[0.5]"}`}
            onClick={() => selectedPageHandler(page - 1)}
          >
            ⏮️
          </span>
          {[...Array(products.length / 10)].map((_, i) => (
            <span
              key={i}
              className={`border border-black rounded-md text-lg px-2 cursor-pointer ${
                page === i + 1 ? "bg-zinc-200" : ""
              }`}
              onClick={() => selectedPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span
            className={`cursor-pointer ${
              page < products.length / 10 ? "" : "opacity-[0.5]"
            }`}
            onClick={() => selectedPageHandler(page + 1)}
          >
            ⏭️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
