
import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
export const AppContextUpdate = createContext();
export const AppLogout = createContext();
export function AppContextProvider({ children }) {
  const [data, setData] = useState();
  function updateData(data) {
    setData(data);
  }
  
  return (
    <AppContext.Provider value={data}>
      <AppContextUpdate.Provider value={updateData}>
        {children}
      </AppContextUpdate.Provider>
    </AppContext.Provider>
  );
}
