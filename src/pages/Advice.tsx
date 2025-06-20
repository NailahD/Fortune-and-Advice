import React, { useState, useEffect } from "react";

const Advice: React.FC = () => {
  const [advice, setAdvice] = useState<string>("");

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => console.error("Error fetching advice:", error));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Get Advice</h1>
      <button onClick={getAdvice}>I need more advice!</button>
      <p>{advice || "Working on it..."}</p>
    </div>
  );
};

export default Advice;
