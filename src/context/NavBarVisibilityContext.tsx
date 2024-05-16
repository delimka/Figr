import React, { createContext, useState, useContext, ReactNode } from "react";

interface NavBarVisibilityContextProps {
  isNavBarVisible: boolean;
  setNavBarVisible: (visible: boolean) => void;
}

const NavBarVisibilityContext = createContext<NavBarVisibilityContextProps | undefined>(undefined);

export const NavBarVisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNavBarVisible, setNavBarVisible] = useState(true);

  return (
    <NavBarVisibilityContext.Provider value={{ isNavBarVisible, setNavBarVisible }}>
      {children}
    </NavBarVisibilityContext.Provider>
  );
};

export const useNavBarVisibility = (): NavBarVisibilityContextProps => {
  const context = useContext(NavBarVisibilityContext);
  if (context === undefined) {
    throw new Error("useNavBarVisibility must be used within a NavBarVisibilityProvider");
  }
  return context;
};
