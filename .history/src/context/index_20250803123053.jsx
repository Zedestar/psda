import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState() {
  const [subHeader, setSubHeader] = useState(false);
  return;
}

export default GlobalState;
