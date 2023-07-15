import { createContext, useReducer } from "react";
import appReducer from "./appReducer";

const contextInit = {
  value: {
    isSignin: false,
    currentPage: 0,
    data: {},
    navigatorVisible: false,
  },
  dispatch: null,
};

export const appContext = createContext(contextInit);

export function AppContextProvider({ children }) {
  const [value, dispatch] = useReducer(appReducer, contextInit.value);

  const ContextProvider = appContext.Provider;

  return (
    <ContextProvider
      value={{
        value,
        dispatch,
      }}
    >
      {children}
    </ContextProvider>
  );
}
