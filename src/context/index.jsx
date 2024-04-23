import { createContext, useState } from "react";

export const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [isQuizStart, setIsQuizStart] = useState(false);

  const contextData = {
    isQuizStart,
    setIsQuizStart,
  };

  return (
    <MainContext.Provider value={contextData}>{children}</MainContext.Provider>
  );
};

export default ContextProvider;
