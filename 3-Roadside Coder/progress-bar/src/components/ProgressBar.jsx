import React, { useState } from "react";

const datas = [
  {
    id: 1,
    heading: "Customer info",
    component: () => <div>Provide your contact details</div>,
  },
  {
    id: 2,
    heading: "Shipping info",
    component: () => <div>Shipping details</div>,
  },
  {
    id: 3,
    heading: "Payment",
    component: () => <div>Payment details</div>,
  },
  {
    id: 4,
    heading: "Delivered",
    component: () => <div>Delivered or not</div>,
  },
];

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === datas.length) {
        setIsCompleted(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateBarWidth = () => {
    return ((currentStep - 1) / (datas.length - 1)) * 100;
  };

  const ActiveComponent = datas[currentStep - 1].component;

  if (datas.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-10 justify-center">
      <div className="py-20 px-40 flex justify-between items-center relative">
        {datas.map((data) => (
          <div
            key={data.id}
            className={`flex flex-col gap-4 justify-center items-center `}
          >
            <span
              className={`bg-zinc-200 w-10 h-10 rounded-full flex justify-center items-center z-10  ${
                currentStep > data.id || isCompleted
                  ? "bg-green-700 text-white"
                  : ""
              }
                  ${currentStep === data.id ? "bg-blue-700 text-white" : ""}
              }`}
              style={{ transition: "all 1s ease-in-out" }}
            >
              {currentStep > data.id || isCompleted ? (
                <span>&#10003;</span>
              ) : (
                data.id
              )}
            </span>
            <span>{data.heading}</span>
          </div>
        ))}
      </div>

      <div className="h-2 bg-zinc-300 absolute top-24 z-0 right-48 left-52 ">
        <div
          className="h-full bg-green-700"
          style={{
            width: `${calculateBarWidth()}%`,
            transition: "width 1s ease-in-out", // Add the transition property
          }}
        ></div>
      </div>
      <div className="flex justify-center">
        {!isCompleted && <ActiveComponent />}
      </div>

      <div className="flex justify-center">
        {!isCompleted && (
          <button className="border px-4 py-2 rounded-lg" onClick={handleNext}>
            {currentStep >= datas.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
