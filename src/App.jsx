import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import Error from "./pages/Error";
import useLocalStorage from "./hooks/useLocalStorage";
import { defaultUser } from "./utils/defaultUser";
import { isAuthenticated } from "./utils/isAuthenticated";

function App() {
  const [userList, setUserList] = useLocalStorage("users", [defaultUser]);
  const [loggedWith, setLoggedWith] = useLocalStorage("loggedWith", {});

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={
            isAuthenticated(loggedWith) ? (
              <Navigate to="/" />
            ) : (
              <Login userList={userList} setLoggedWith={setLoggedWith} />
            )
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated(loggedWith) ? (
              <UserList
                userList={userList}
                setUserList={setUserList}
                loggedWith={loggedWith}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
