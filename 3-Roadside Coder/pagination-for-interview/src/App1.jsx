import React, { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { Card } from "./components/card";

const App1 = () => {
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const products = useProducts();

  const totalNumberOfPages = Math.ceil(products.length / productsPerPage);
  const pageNumberArray = [...Array(totalNumberOfPages + 1).keys()].slice(1);

  //   console.log(pageNumberArray);
  const lastIndexOfPage = currentPage * productsPerPage;
  const firstIndexOfPage = lastIndexOfPage - productsPerPage;

  const visibleProducts = products.slice(firstIndexOfPage, lastIndexOfPage);

  const handlePrevButton =()=>{
    if(currentPage !==1) setCurrentPage(currentPage-1)
  }
  const handleNextButton =()=>{
    if(currentPage !== totalNumberOfPages) setCurrentPage(currentPage+1)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-10 px-40 justify-center items-center py-10">
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center py-10 gap-10">
        <button onClick={handlePrevButton}>⏮️</button>
        <div className="flex gap-4 ">
          {pageNumberArray.map((pageNumber) => (
            <span
              className="border border-black p-2"
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </span>
          ))}
        </div>

        <button onClick={handleNextButton}>⏭️</button>
      </div>
    </div>
  );
};

export default App1;
