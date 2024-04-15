import React, { useEffect, useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);

  const [emi, setEmi] = useState(0);
  const [isValidInput, setIsValidInput] = useState(false);

  useEffect(() => {
    calculateEMI();
  }, [amount, interest, years]);

  function calculateEMI() {
    let r = interest;
    if (amount !== 0 && interest !== 0 && years !== 0) {
      r = r / 12 / 100;
      const calpow = Math.pow(1 + r, years * 12);
      const totalEMI = amount * ((r * calpow) / (calpow - 1));
      setEmi(Math.round(totalEMI));
      setIsValidInput(true);
    }
  }

  return (
    <div className="container">
      <div className="input-form">
        <label htmlFor="">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            calculateEMI(); // Call calculateEMI on change
          }}
        />
        <label htmlFor="">Interest</label>
        <input
          type="number"
          placeholder="Interest"
          value={interest}
          onChange={(e) => {
            setInterest(e.target.value);
            calculateEMI(); // Call calculateEMI on change
          }}
        />
        <label htmlFor="">Years</label>
        <input
          maxLength={2}
          type="number"
          placeholder="Years"
          value={years}
          onChange={(e) => {
            setYears(e.target.value);
            calculateEMI(); // Call calculateEMI on change
          }}
        />
      </div>
      <div>{isValidInput && <span>Your EMI is : {emi}</span>}</div>
    </div>
  );
};

export default App;
