import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../src/img/googleLogo.jpg";
import kakao from "../img/Subtract.png";
import { login } from "../api/axios";
import { setUser } from "../store/reducers/userSlice";
import { signup } from "../store/reducers/usersSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import FailPopUp from "../components/FailPopUp";
import logo from "../img/logo/ADHD Aspire, Dream, Honor, Discover.png";

export default function Login() {
  const [stillLogin, setStillLogin] = useState<boolean>(false);
  const [failPopUp, setFailPopUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();

  const dispatch = useAppDispatch();
  //로그인 유지
  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      router("/container");
    }
  }, []);
  //hook
  const users = useAppSelector((state) => state.persist.users);

  const onClick = async () => {
    const result = await login(username, password);
    if (result === "failed to login") {
      alert("아이디와 비밀 번호가 올바르지 않습니다.");
    } else {
      const { accessToken, refreshToken } = result;

      if (stillLogin) {
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
      }

      router("/container");
    }
    console.log(result);
    // 받아온 데이터를 이용하여 setUser 액션을 디스패치
    dispatch(
      setUser({
        name: result.name,
        email: result.email,
        username: result.username,
        birth: result.birth,
      })
    );
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  // const loginButton = () => {
  //   const ids = users.map((data: any) => data.email);
  //   const pw = users.map((data: any) => data.password);
  //   console.log(ids);
  //   console.log(pw);
  //   if (ids.includes(username) && pw.includes(password)) {
  //     console.log("로그인성공");
  //     router("/container");
  //   } else {
  //     console.log("로그인실패");
  //     setFailPopUp(!failPopUp);
  //     setUsername("");
  //     setPassword("");
  //   }
  // };

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
          <img src={logo} alt="" className="w-[100px] mb-2" />
          <div className="font-medium mb-12">
            회원이 아니신가요?
            <Link to="/membership" className="text-sky-500 font-semibold pl-2">
              회원가입
            </Link>
          </div>
          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="ID"
              className="w-96 h-11 border-2 rounded p-7 mb-4"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
              <input
                type="checkbox"
                id="id"
                onClick={() => setStillLogin(!stillLogin)}
              />
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
            // onClick={loginButton}
            onClick={onClick}
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
