import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../src/img/googleLogo.jpg";
import kakao from "../img/Subtract.png";
import { login } from "../api/axios";
import { setUser } from "../store/reducers/userSlice";
import { signup } from "../store/reducers/usersSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import FailPopUp from "../components/FailPopUp";

export default function Login() {
  const [stillCheck, setStillCheck] = useState(false);
  const [failPopUp, setFailPopUp] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();

  //hook
  const users = useAppSelector((state) => state.persist.users);

  //Api 아이디
  // const onChangeId = (e: any) => {
  //   setUsername(e.target.value);
  // };

  // const onChangePw = (e: any) => {
  //   setPassword(e.target.value);
  // };

  //로그인 유지
  // const stillButton = () => {
  //   setStillCheck(!stillCheck);
  //   const ids = users.map((data: any) => data.email);
  //   const pw = users.map((data: any) => data.password);
  //   if (
  //     stillCheck == true &&
  //     ids.includes(userEmail) &&
  //     pw.includes(password)
  //   ) {
  //   } else {
  //   }
  // };

  // const onClick = async () => {
  //   const result = await login(username, password);
  //   console.log(result);
  //   const { accessToken, refreshToken } = result;
  //   localStorage.setItem("access", accessToken);
  //   localStorage.setItem("refresh", refreshToken);
  //   router("/container");
  // };

  const loginButton = () => {
    const ids = users.map((data: any) => data.email);
    const pw = users.map((data: any) => data.password);
    console.log(ids);
    console.log(pw);
    if (ids.includes(userEmail) && pw.includes(password)) {
      console.log("로그인성공");
      router("/container");
    } else {
      console.log("로그인실패");
      setFailPopUp(!failPopUp);
      setUserEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div
        className={`${
          failPopUp
            ? "invisible w-0 h-0"
            : "w-screen h-screen flex justify-center items-center"
        }`}
      >
        <div className=" flex flex-col items-center">
          <div>Logo</div>
          <div className="font-medium mb-12">
            회원이 아니신가요?
            <Link to="/membership" className="text-sky-500 font-semibold pl-2">
              회원가입
            </Link>
          </div>
          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="이메일"
              className="w-96 h-11 border-2 rounded p-7 mb-4"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="w-96 h-11 border-2 rounded p-7"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="w-full flex justify-between mb-8">
            <div>
              <input type="checkbox" id="id" />
              <label htmlFor="id">로그인 유지</label>
            </div>
            <div className="flex flex-row text-gray-600">
              <Link to="/find-id&password" className="flex">
                <div>아이디찾기</div>
                <div className="mx-2">/</div>
                <div>비밀번호찾기</div>
              </Link>
            </div>
          </div>
          <button
            className="w-96 h-11 rounded bg-blue-950 text-white mb-4"
            onClick={loginButton}
          >
            로그인
          </button>

          <button className="w-96 h-11 border-2 rounded bg-white mb-4 flex justify-center items-center">
            <img src={googleLogo} alt="logo" className="mr-2" />
            구글계정으로 로그인
          </button>

          <button className="w-96 h-11 rounded bg-yellow-300 mb-4 flex justify-center items-center">
            <img src={kakao} alt="logo" className="mr-2" />
            카카오계정으로 로그인
          </button>
        </div>
      </div>
      {failPopUp && <FailPopUp setFailPopUp={setFailPopUp} />}
    </div>
  );
}
