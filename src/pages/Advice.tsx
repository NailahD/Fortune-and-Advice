import React, { useState, useEffect } from "react";

const Advice: React.FC = () => {
  const [advice, setAdvice] = useState<string>("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.advice))
      .catch((error) => console.error("Error fetching advice:", error));
  }, []);

  return (
    <div>
      <h1>Get Advice</h1>
      <p>{advice || "Working on it..."}</p>
    </div>
  );
};

export default Advice;
