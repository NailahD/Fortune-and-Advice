import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome, traveler!</h1>
      <p>
        <Link to="/Advice">I Need Advice!</Link>
      </p>
      <p>
        <Link to="/Fortune2">Tell My Fortune!</Link>
      </p>
    </div>
  );
};

export default Home;
