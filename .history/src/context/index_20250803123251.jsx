import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [subHeader, setSubHeader] = useState(false);

  return <GlobalContext.Provider val>{children}</GlobalContext.Provider>;
}

export default GlobalState;
