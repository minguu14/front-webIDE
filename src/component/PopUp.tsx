import React from "react";
import InputBox from "./InputBox";
import { Link } from "react-router-dom";
export default function PopUp() {
  return (
    <div className="w-srceen h-screen flex justify-center items-center">
      <div className="w-96 h-48 bg-gray-50  border rounded flex flex-col justify-center items-center">
        <div className="flex justify-center items-center font-semibold mb-10">
          <div className="text-sky-500">회원가입</div>이 완료되었습니다
        </div>
        <Link to={"/"}>
          <button className="w-80 h-11 rounded bg-blue-950 text-white">
            {" "}
            완료
          </button>
        </Link>
      </div>
    </div>
  );
}
