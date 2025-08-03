import { createContext, useState } from "react";

export const GlobalContext = createContext;

function GlobalState() {
  const [subHeader, setSubHeader] = useState(false);
  return <div></div>;
}

export default GlobalState;
