import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [subHeader, setSubHeader] = useState(false);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
