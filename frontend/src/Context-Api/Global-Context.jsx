import { createContext, useState } from "react";

export const GlobalText = createContext(null);
export default function GlobalState({ children }) {
  const [Details, setDetails] = useState({
    name:'',
    email:'',
    password:''
  });
  return (
    <GlobalText.Provider value={{ Details, setDetails }}>
      {children}
    </GlobalText.Provider>
  );
}
