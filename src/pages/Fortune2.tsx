import React, { useState, useEffect } from "react";
import axios from "axios";

const Fortune2: React.FC = () => {
  const [fortune2, setFortune2] = useState<string>("");

  const getFortune2 = () => {
    axios
      .get("http://localhost:5000/api/fortunes")
      .then((response) => {
        const items = response.data;
        if (items.length > 0) {
          const randomIndex = Math.floor(Math.random() * items.length);
          setFortune2(items[randomIndex].content);
        } else {
          setFortune2("The cookie jar is empty.");
        }
      })
      .catch((error) =>
        console.error("Your fortune is shrouded in mist:", error)
      );
  };

  useEffect(() => {
    getFortune2();
  }, []);

  return (
    <div>
      <h1>Tell My Fortune</h1>
      <button onClick={getFortune2}>Reveal Fortune 🍪</button>
      <p>{fortune2 || "Click the cookie to reveal your fate..."}</p>
    </div>
  );
};

export default Fortune2;
