import React, { useState, useEffect } from "react";
import axios from "axios";

const Fortune: React.FC = () => {
  const [fortune, setFortune] = useState<string>("");

  const getFortune = () => {
    axios
      .get("http://localhost:5000/api/fortunes")
      .then((response) => {
        const items = response.data;
        if (items.length > 0) {
          const randomIndex = Math.floor(Math.random() * items.length);
          setFortune(items[randomIndex].content);
        } else {
          setFortune("Your fortune is shrouded in mist...");
        }
      })
      .catch((error) =>
        console.error("The stars are not in alignment...", error)
      );
  };

  useEffect(() => {
    getFortune();
  }, []);

  return (
    <div>
      <h1>Tell My Fortune</h1>
      <button onClick={getFortune}>Reveal Fortune 🍪</button>
      <p>{fortune || "Eat a cookie..."}</p>
    </div>
  );
};

export default Fortune;
