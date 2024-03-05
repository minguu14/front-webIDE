import React from "react";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="*" element={<div>404 page</div>}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
