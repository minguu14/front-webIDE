import React from "react";
import InputBox from "./InputBox";
import { Link } from "react-router-dom";
export default function FailIDPopUp({ failIDPopUp, setFilIDPopUp }: any) {
  return (
    <div className={`${setFilIDPopUp ? "absolute" : "invisible w-0 h-0"}`}>
      <div className="w-srceen h-screen flex justify-center items-center">
        <div className="w-96 h-48 bg-gray-50  border rounded flex flex-col justify-center items-center">
          <div className="flex justify-center items-center font-semibold mb-10">
            <div className="text-sky-500">정보</div>가 잘못되었습니다.
          </div>
          <Link to={"/find-id&password"}>
            <button
              className="w-80 h-11 rounded bg-blue-950 text-white"
              onClick={() => setFilIDPopUp(!failIDPopUp)}
            >
              완료
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
