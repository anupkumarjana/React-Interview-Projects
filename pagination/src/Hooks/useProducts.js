import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rawData = await fetch("https://dummyjson.com/products");
    const jsonData = await rawData.json();
    console.log(jsonData.products);
    setProducts(jsonData.products);
  };
  return products;
};
