import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [subHeader, setSubHeader] = useState(false);

  const [userMode, setUserMode] = useState(true);

  const [active, setActive] = useState(() => {
    const activeTab = localStorage.getItem("activeTab");
    return activeTab ? JSON.parse(activeTab) : 1;
  });

  useEffect(() => {
    localStorage.setItem("activeTab", active);
  }, [active]);
  return (
    <GlobalContext.Provider
      value={{
        subHeader,
        setSubHeader,
        active,
        setActive,
        userMode,
        setUserMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
