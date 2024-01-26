import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

AppContextProvider.propTypes = {
  children: PropTypes.string,
};

const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [title, setTitle] = useState("Dashboard");

  const value = {
    title,
    setTitle,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextProvider;
