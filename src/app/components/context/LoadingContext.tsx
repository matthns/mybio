import { useState, createContext, ReactNode, useContext } from "react";
import { ImSpinner2 } from "react-icons/im";

const LoadingContext = createContext<{
  loading: boolean;
  setLoading: (value: boolean) => void;
}>({ loading: true, setLoading: () => {} });

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  function _setLoading(value: boolean) {
    setLoading(value);
  }

  return (
    <LoadingContext.Provider value={{ loading, setLoading: _setLoading }}>
      {loading && (
        <div className="h-full w-full text-white flex items-center justify-center bg-heavy-blue absolute top-0 left-0 inset-0 z-50">
          <ImSpinner2
            className={"w-8 h-8 text-gray-200 animate-spin fill-white"}
          />
        </div>
      )}
      <>{children}</>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
