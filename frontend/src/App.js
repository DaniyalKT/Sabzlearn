import "./App.css";
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});

  const router = useRoutes(routes);

  const login = useCallback((setInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(setInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    if (localStorageData) {
      fetch("http://localhost:4000/v1/auth/me", {
        post: "GET",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((response) => response.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
        });
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
