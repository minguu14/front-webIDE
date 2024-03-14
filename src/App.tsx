import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Membership from "./pages/Membership";
import FindIDPassword from "./pages/FindIDPassword";

import CheckPassword from "./pages/CheckPassword";
import MyPage from "./pages/MyPage";
import Container from "./pages/Container";

function App() {
  const [foundIndex, setFoundIndex] = useState(null);

  return (
    <Routes>
      <Route path="*" element={<div>404 page</div>}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/container" element={<Container />}></Route>
      <Route path="/membership" element={<Membership />}></Route>
      <Route
        path="/find-id&password"
        element={
          <FindIDPassword
            foundIndex={foundIndex}
            setFoundIndex={setFoundIndex}
          />
        }
      ></Route>
      <Route
        path="find-id&password/checkpassword"
        element={<CheckPassword foundIndex={foundIndex} />}
      ></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
    </Routes>
  );
}

export default App;
