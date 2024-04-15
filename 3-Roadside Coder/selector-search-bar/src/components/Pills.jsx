import React from "react";

function Pills({ image, firstName, lastName, onClick }) {
  return (
    <span
      onClick={onClick}
      className="flex gap-2 items-center rounded-3xl bg-blue-700 text-white p-2 cursor-pointer"
    >
      <img src={image} alt="" className="w-6 h-6 rounded-full" />
      <span>
        {firstName} {lastName} &times;
      </span>
    </span>
  );
}

export default Pills;
