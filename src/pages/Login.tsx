import { useState } from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../src/img/googleLogo.jpg";
import kakao from "../img/Subtract.png";

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
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
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-96 h-11 border-2 rounded p-7"
          />
        </div>
        <div className="w-full flex justify-between mb-8">
          <div>
            <input
              type="checkbox"
              id="id"
              checked={isChecked}
              onChange={handleCheckboxChange}
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
        <button className="w-96 h-11 rounded bg-blue-950 text-white mb-4">
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
  );
}
