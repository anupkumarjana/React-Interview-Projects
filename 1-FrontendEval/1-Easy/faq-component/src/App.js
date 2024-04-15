import React from "react";
import FAQ from "./FAQ";
import { Data } from "./Data";

const App = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-20">
      {Data.map((data, index) => (
        <FAQ data={data} key={index} index={index} />
      ))}
    </div>
  );
};

export default App;
