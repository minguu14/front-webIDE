import React from "react";
import InputBox from "../component/InputBox";
import { Link } from "react-router-dom";

export default function FindIDPassword() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <header className="flex mb-10">
          <div className="font-semibold text-sky-500 text-3xl mr-3">아이디</div>
          <div className="font-semibold text-3xl">찾기</div>
        </header>
        <div>
          <div className="flex relative ">
            이메일
            <div className="text-red-500 absolute left-10 bottom-1">*</div>
          </div>
          <InputBox type={"text"} placeholder={"이메일"} />
        </div>
        <div>
          <div className="flex relative">
            이름
            <div className="text-red-500 absolute left-[26px] bottom-1">*</div>
          </div>
          <InputBox type={"text"} placeholder={"이름"} />
        </div>
        <div className="mb-14">
          <div className="flex relative">
            생년월일 8자리
            <div className="text-red-500 absolute left-24 bottom-1">*</div>
          </div>
          <InputBox type={"number"} placeholder={"950205"} />
        </div>
        <Link to="/find-id&password/checkid">
          <button className="w-96 h-11 rounded bg-blue-950 text-white">
            완료
          </button>
        </Link>
      </div>
      <hr className="w-[1px] h-[380px] bg-gray-300 mx-12" />
      <div>
        <header className="flex mb-10">
          <div className="font-semibold text-sky-500 text-3xl mr-3">
            비밀번호
          </div>
          <div className="font-semibold text-3xl">찾기</div>
        </header>
        <div>
          <div className="flex relative ">
            아이디
            <div className="text-red-500 absolute left-10 bottom-1">*</div>
          </div>
          <InputBox type={"text"} placeholder={"아이디"} />
        </div>
        <div>
          <div className="flex relative">
            이름
            <div className="text-red-500 absolute left-[26px] bottom-1">*</div>
          </div>
          <InputBox type={"text"} placeholder={"이름"} />
        </div>
        <div className="mb-14">
          <div className="flex relative">
            생년월일 8자리
            <div className="text-red-500 absolute left-24 bottom-1">*</div>
          </div>
          <InputBox type={"number"} placeholder={"950205"} />
        </div>
        <Link to="/find-id&password/checkpassword">
          <button className="w-96 h-11 rounded bg-blue-950 text-white">
            완료
          </button>
        </Link>
      </div>
    </div>
  );
}
