import React, { useEffect, useContext } from "react";
import { LoadingContext } from "../../Context/Loading";

function LoadingLine() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [setIsLoading]);

  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        setIsLoading(true);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading, setIsLoading]);

  return (
    <div className="relative bottom-0 h-1.5 w-full overflow-hidden">
      {isLoading && (
        <div
          className="absolute block top-0 left-0 h-full w-full animate-fill"
          onAnimationEnd={() => setIsLoading(false)}
        ></div>
      )}
    </div>
  );
}

export default LoadingLine;
