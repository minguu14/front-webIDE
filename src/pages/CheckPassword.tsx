import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../component/InputBox";

export default function CheckPassword() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <header className="flex mb-10">
        <div className="font-semibold text-sky-500 text-3xl mr-3">비밀번호</div>
        <div className="font-semibold text-3xl">변경</div>
      </header>
      <div>
        <div className="flex relative">
          비밀번호 변경
          <div className="text-red-500 absolute left-[86px] bottom-1">*</div>
        </div>
        <InputBox type={"password"} placeholder={"비밀번호 변경"} />
      </div>
      <div className="mb-14">
        <div className="flex relative">
          비밀번호 확인
          <div className="text-red-500 absolute left-[86px] bottom-1">*</div>
        </div>
        <InputBox type={"password"} placeholder={"비밀번호 확인"} />
      </div>
      <Link to="/find-id&password">
        <button className="w-96 h-11 rounded bg-blue-950 text-white">
          완료
        </button>
      </Link>
    </div>
  );
}
