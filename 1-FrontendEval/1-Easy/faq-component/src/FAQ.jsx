import React, { useEffect, useState } from "react";

const FAQ = ({ data, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 w-[30rem]">
      <div
        className="cursor-pointer bg-orange-500 p-4 flex justify-between "
        onClick={() => setIsShow(!isShow)}
      >
        <span className="">{data.question}</span>
        <span>{isShow ? "🔽" : "⏭️"}</span>
      </div>
      {isShow && (
        <span className="transition-all ease-in-out duration-300">
          {data.answer}
        </span>
      )}
    </div>
  );
};

export default FAQ;
