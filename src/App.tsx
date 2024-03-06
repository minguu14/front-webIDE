import React from "react";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Membership from "./pages/Membership";
import FindIDPassword from "./pages/FindIDPassword";

function App() {
  return (
    <Routes>
      <Route path="*" element={<div>404 page</div>}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/membership" element={<Membership />}></Route>
      <Route path="/find-id&password" element={<FindIDPassword />}></Route>
    </Routes>
  );
}

export default App;
