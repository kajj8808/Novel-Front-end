import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    darkTheme: false,
  });
  const logInUser = () => setUser({ ...user, isLoggedIn: true });
  const changeTheme = () => setUser({ ...user, darkTheme: !user.darkTheme });
  return (
    <UserContext.Provider value={{ user, logInUser, changeTheme }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
