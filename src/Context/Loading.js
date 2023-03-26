import { createContext, useState } from "react";

export const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
});

const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const value = { isLoading, setIsLoading };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
