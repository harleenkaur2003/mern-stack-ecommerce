import { createContext, useEffect, useState } from "react";
import ProductAPI from "./api/ProductAPI";
import axios from "axios";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async () => {
    try {
      const res = await axios.post("/user/refresh_token");
      setToken(res.data.accessToken);
    } catch (err) {
      console.error("Failed to refresh token:", err);
    }
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) refreshToken();
  }, []);

  const state = {
    token: [token, setToken],
    productAPI: ProductAPI(),
    userAPI: UserAPI(token), 
  };

  return  (<GlobalState.Provider value={{ state }}>
  {children}
</GlobalState.Provider>
  )
};

export default GlobalState;