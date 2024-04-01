import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
