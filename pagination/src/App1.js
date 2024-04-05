import React, { useState } from "react";
import { useProducts } from "./Hooks/useProducts.js";

const App1 = () => {
  const [page, setPage] = useState(1);
  const products = useProducts();

  const handlePageClick = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 5) {
      setPage(selectedPage);
    }
  };
  return (
    <div className="flex-flex-col gap-10">
      <div className="flex gap-4 flex-wrap pt-10 px-40">
        {products.slice(page * 5 - 5, page * 5).map((product) => (
          <div key={product.id} className="flex flex-col gap-2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 w-40"
            />
            <span>Rs. {product.price}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-10 gap-6">
        <span
          className={`cursor-pointer ${page > 1 ? "" : "opacity-[0.5]"}`}
          onClick={() => handlePageClick(page - 1)}
        >
          ⏮️
        </span>
        <div className="flex gap-4">
          {[...Array(products.length / 5)].map((_, i) => (
            <span
              className={`border rounded-md px-4 cursor-pointer ${
                page === i + 1 ? "bg-slate-300" : ""
              }`}
              onClick={() => handlePageClick(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </div>
        <span
          className={`cursor-pointer ${
            page < products.length / 5 ? "" : "opacity-[0.5]"
          }`}
          onClick={() => handlePageClick(page + 1)}
        >
          ⏭️
        </span>
      </div>
    </div>
  );
};

export default App1;
