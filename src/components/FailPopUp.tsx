import React from "react";
import InputBox from "./InputBox";
import { Link } from "react-router-dom";
export default function FailPopUp({ setFailPopUp }: any) {
  return (
    <div className="w-srceen h-screen flex justify-center items-center">
      <div className="w-96 h-48 bg-gray-50  border rounded flex flex-col justify-center items-center">
        <div className="flex justify-center items-center font-semibold mb-10">
          <div className="text-sky-500">로그인</div>을 실패하셨습니다.
        </div>
        <Link to={"/"}>
          <button
            className="w-80 h-11 rounded bg-blue-950 text-white"
            onClick={() => setFailPopUp(!FailPopUp)}
          >
            완료
          </button>
        </Link>
      </div>
    </div>
  );
}
