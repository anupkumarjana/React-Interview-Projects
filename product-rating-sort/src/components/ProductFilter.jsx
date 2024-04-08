import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function ProductFilter() {
  const [products, setProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    rating: 0, // Initial rating filter value
    category: "", // Initial category filter value
    // Add more filter criteria as needed
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rawDdata = await fetch("https://dummyjson.com/products");
    const jsonData = await rawDdata.json();
    const data = jsonData["products"];
    setProducts(data);
  };

  const handleFilterByRating = () => {
    const filteredProducts = products.filter(
      (product) => product.rating > filterOptions.rating
    );
    setProducts(filteredProducts);
  };

  const handleFilterByCategory = () => {
    const filteredProducts = products.filter(
      (product) => product.category === filterOptions.category
    );
    setProducts(filteredProducts);
  };

  // Add more filter handlers as needed

  return products.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <label>
        Rating:
        <input
          type="number"
          value={filterOptions.rating}
          onChange={(e) =>
            setFilterOptions({
              ...filterOptions,
              rating: Number(e.target.value),
            })
          }
        />
      </label>
      <button onClick={handleFilterByRating}>Apply Rating Filter</button>

      <label>
        Category:
        <input
          type="text"
          value={filterOptions.category}
          onChange={(e) =>
            setFilterOptions({ ...filterOptions, category: e.target.value })
          }
        />
      </label>
      <button onClick={handleFilterByCategory}>Apply Category Filter</button>

      {/* Display filtered products */}
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <span>{product.description}</span>
          <div>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                height="100px"
                alt={`Product ${index}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductFilter;
