import React from "react";
import InputBox from "../component/InputBox";

export default function Membership() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <header className="flex">
        <div className="font-semibold text-sky-500 text-3xl mr-3">회원가입</div>
        <div className="font-semibold text-3xl">입력</div>
      </header>

      <div>
        <div className="flex relative ">
          이메일<div className="text-red-500 absolute left-10 bottom-1">*</div>
        </div>
        <InputBox type={"text"} placeholder={"이메일"} />
      </div>
      <div>
        <div className="flex relative">
          ID<div className="text-red-500 absolute left-3 bottom-1">*</div>
        </div>
        <InputBox type={"text"} placeholder={"ID"} />
      </div>
      <div>
        <div className="flex relative">
          비밀번호
          <div className="text-red-500 absolute left-[54px] bottom-1">*</div>
        </div>
        <InputBox type={"password"} placeholder={"비밀번호"} />
      </div>
      <div className="mb-14">
        <div className="flex relative">
          생년월일 8자리
          <div className="text-red-500 absolute left-24 bottom-1">*</div>
        </div>
        <InputBox type={"number"} placeholder={"950205"} />
      </div>
      <button className="w-96 h-11 rounded bg-blue-950 text-white">완료</button>
    </div>
  );
}
