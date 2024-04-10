import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const rawData = await fetch("https://dummyjson.com/products");
      const jsonData = await rawData.json();
      setProducts(jsonData.products);
    } catch (err) {
      console.log(err);
    }
  };

  return products
};
