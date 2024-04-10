import React, { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { Card } from "./components/card";

const App = () => {
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const products = useProducts();

  const totalNumberOfPages = Math.ceil(products.length / productsPerPage);
  const pageNumberArray = [...Array(totalNumberOfPages + 1).keys()].slice(1);

  const lastIndexOfProducts = currentPage * productsPerPage;
  const firstIndexOfProducts = lastIndexOfProducts - productsPerPage;

  const visibleProducts = products.slice(
    firstIndexOfProducts,
    lastIndexOfProducts
  );

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPageHandler = () => {
    if (currentPage !== totalNumberOfPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="py-10 flex flex-col gap-10 justify-center items-center">
      <label htmlFor=""> Select how many products you want to see</label>
      <select
        onChange={(e) => setProductsPerPage(e.target.value)}
        className="w-20 text-black"
      >
        <option value="4">4</option>
        <option value="10">10</option>
        <option value="12">12</option>
      </select>

      <div className="px-40 flex justify-center items-center flex-wrap gap-10 pt-10">
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-10 items-center">
        <button
          className={`cursor-pointer ${
            currentPage === 1 ? "opacity-[0.5]" : ""
          }`}
          onClick={prevPageHandler}
        >
          ⏮️
        </button>
        <div className="flex justify-center gap-10 py-10">
          {pageNumberArray.map((pageNumber) => (
            <span
              className={`border border-black  px-4 rounded-md cursor-pointer ${
                currentPage === pageNumber ? "bg-zinc-200" : ""
              }`}
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </span>
          ))}
        </div>
        <button
          className={`cursor-pointer ${
            currentPage === totalNumberOfPages ? "opacity-[0.5]" : ""
          }`}
          onClick={nextPageHandler}
        >
          ⏭️
        </button>
      </div>
    </div>
  );
};

export default App;
