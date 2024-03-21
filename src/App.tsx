import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Membership from "./pages/Membership";
import FindIDPassword from "./pages/FindIDPassword";
import CheckPassword from "./pages/CheckPassword";
import MyPage from "./pages/MyPage";
import Container from "./pages/Container";
import Editor from "./pages/Editor";

function App() {
  const [foundIndex, setFoundIndex] = useState(null);
  const [userid, setUserid] = useState("");

  return (
    <Routes>
      <Route path="*" element={<div>404 page</div>}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/container" element={<Container />}></Route>
      <Route path="/editor" element={<Editor />}></Route>
      <Route path="/membership" element={<Membership />}></Route>
      <Route
        path="/find-id&password"
        element={
          <FindIDPassword
            // foundIndex={foundIndex}
            // setFoundIndex={setFoundIndex}
            userid={userid}
            setUserid={setUserid}
          />
        }
      ></Route>
      <Route
        path="/find-id&password/checkpassword"
        element={<CheckPassword userid={userid} setUserid={setUserid} />}
      ></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
    </Routes>
  );
}

export default App;
