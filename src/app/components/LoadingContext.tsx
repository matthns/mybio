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
        <div className="h-screen w-screen text-white flex items-center justify-center bg-slate-950 absolute inset-0 z-50">
          <ImSpinner2
            className={"w-8 h-8 mr-2 text-gray-200 animate-spin fill-white"}
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
