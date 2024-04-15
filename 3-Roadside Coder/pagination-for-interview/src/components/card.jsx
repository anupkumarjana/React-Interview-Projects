import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";

export const Card = ({product}) => {




  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      {/* <span className="text-center">{product.id}</span> */}
      <img src={product.thumbnail} alt="" className="w-40 h-40" />
      <span>{product.title.slice(0,15)}..</span>
      <span>{product.category}</span>
      <span>{product.price}</span>
    </div>
  );
};


