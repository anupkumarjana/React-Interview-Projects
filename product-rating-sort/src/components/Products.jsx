import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function Products() {
  const [products, setProducts] = useState([]);
  const [filterByRating, setFilterByRating] = useState([]);
  const [filterButtonCliked, setFilterButtonCliked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rawDdata = await fetch("https://dummyjson.com/products");
    const jsonData = await rawDdata.json();
    console.log(jsonData);
    const data = jsonData["products"];

    setProducts(data);
    // console.log(data);
  };
  const handleFilterButtonClick = () => {
    setFilterByRating(products.filter((product) => product.rating > 4.5));
    setFilterButtonCliked((prevClicked) => !prevClicked);
    document
      .getElementById("rating")
      .setAttribute("class", filterButtonCliked ? "" : "button-color");
  };

  const data = filterButtonCliked ? filterByRating : products;

  console.log(filterByRating);
  return products.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {" "}
      <button
        id="rating"
        onClick={handleFilterButtonClick}
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        Rating 4+
      </button>
      <div className="card-container">
        {data.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.title}</h2>
            <span>{product.description.slice(0, 25) + "..."}</span>
            <div>
              {/* {product.images.map((img, index) => (
              <img key={index} src={img} height="100px" />
            ))} */}
              {<img src={product.images[1]} alt="" height="200px" />}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
