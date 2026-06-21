import { createContext, useContext, useEffect, useState } from "react";
import { AuthDataContext } from "./AuthContext";
import axios from "axios";
export const userDataContext = createContext();
function UserContext({ children }) {
  let { serverUrl } = useContext(AuthDataContext);
  let [userData, setUserData] = useState(null);
  const getCurrentUser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/currentuser", {
        withCredentials: true,
      });
      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  let value = {
    userData,
    setUserData,
  };
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  );
}

export default UserContext;
