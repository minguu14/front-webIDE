import React from "react";
import { Link } from "react-router-dom";

export default function CheckID() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <header className="flex mb-10">
        <div className="font-semibold text-sky-500 text-3xl mr-3">아이디</div>
        <div className="font-semibold text-3xl">찾기</div>
      </header>
      <div className="mb-14">
        <div className="text-2xl">누구님의 아이디는 @@@ 입니다. 감사합니다</div>
      </div>
      <Link to="/find-id&password">
        <button className="w-96 h-11 rounded bg-blue-950 text-white">
          완료
        </button>
      </Link>
    </div>
  );
}
