import React, { useState, useEffect } from "react";
import axios from "axios";

const Fortune: React.FC = () => {
  const [fortune, setFortune] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((response) => response.data())
      .then((data) => setFortune(data.fortune))
      .catch((error) =>
        console.error("Your fortune is shrouded in mist:", error)
      );
  }, []);

  return (
    <div>
      <h1>Tell My Fortune</h1>
      <p>{fortune || "Patience is a virtue..."}</p>
    </div>
  );
};

export default Fortune;
