import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import Login from "./pages/Login/Login";
import Error from "./pages/Error";
import useLocalStorage from "./hooks/useLocalStorage";
import { defaultUser } from "./utils/defaultUser";
import { isNotEmptyObj } from "./utils/isNotEmptyObj";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [userList, setUserList] = useLocalStorage("users", [defaultUser]);
  const [loggedWith, setLoggedWith] = useLocalStorage("loggedWith", {});

  return (
    <BrowserRouter>
      <Header loggedWith={loggedWith} setLoggedWith={setLoggedWith} />
      <Routes>
        <Route
          path="login"
          element={
            isNotEmptyObj(loggedWith) ? (
              <Navigate to="/" />
            ) : (
              <Login userList={userList} setLoggedWith={setLoggedWith} />
            )
          }
        />
        <Route
          path="/"
          element={
            isNotEmptyObj(loggedWith) ? (
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
