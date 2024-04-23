import React, { useContext } from "react";
import { MainContext } from "../context";

const Dashboard = () => {
  const { setIsQuizStart } = useContext(MainContext);

  return (
    <div className="wrapper">
      <h1>PokeTypes</h1>
      <div className="box">
        <h2>Pokemon type guessing quiz</h2>
        <ul>
          <li>you have 1 minute</li>
          <li>guess as many correct as you can</li>
        </ul>
        <button onClick={() => setIsQuizStart(true)}>Start quiz</button>
      </div>
    </div>
  );
};

export default Dashboard;
