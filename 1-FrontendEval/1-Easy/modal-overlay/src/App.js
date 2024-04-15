import React, { useState } from "react";

const App = () => {
  const [showOffer, setShowOffer] = useState(false);
  const [isOfferAccecped, setIsOfferAccepted] = useState(false);

  const handShowOfferClick = () => {
    setShowOffer(true);
  };
  const handleCancelClick = () => {
    setShowOffer(false);
  };

  const handleAcceptOffer = () => {
    setIsOfferAccepted(true);
    setShowOffer(false);
  };

  const handleOutsideClick = () => {
    setShowOffer(false);
  };

  return (
    <div className="container">
      {!isOfferAccecped && (
        <button onClick={handShowOfferClick}>Show Offer</button>
      )}
      {showOffer && (
        <>
          <div
            className={`${showOffer ? "overlay" : ""}`}
            onClick={handleOutsideClick}
          ></div>
          <div className={`modal `}>
            <button onClick={handleCancelClick}>X</button>
            <p>Click the button to accept amazing offer</p>
            <button onClick={handleAcceptOffer}>Accept Offer</button>
          </div>
        </>
      )}
      {isOfferAccecped && <p>Offer Accepted</p>}
    </div>
  );
};

export default App;
