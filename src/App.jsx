import { useContext, useState } from "react";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import { MainContext } from "./context";

function App() {
  const { isQuizStart } = useContext(MainContext);

  return <main>{isQuizStart ? <Quiz /> : <Dashboard />}</main>;
}

export default App;
