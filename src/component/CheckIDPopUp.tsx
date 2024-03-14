import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hook";

export default function CheckIDPopUp({
  foundName,
  foundId,
  setOpenIDPopUp,
  openIDPopUp,
}: any) {
  console.log(foundName, foundId);
  return (
    <div className={`${openIDPopUp ? "absolute" : "invisible w-0 h-0"}`}>
      <div className=" w-screen h-screen flex flex-col justify-center items-center bg-white">
        <header className="flex mb-10">
          <div className="font-semibold text-sky-500 text-3xl mr-3">아이디</div>
          <div className="font-semibold text-3xl">찾기</div>
        </header>
        <div className="mb-14">
          <div className="text-2xl">
            {foundName}님의 아이디는 {foundId} 입니다. 감사합니다
          </div>
        </div>
        <button
          className="w-96 h-11 rounded bg-blue-950 text-white"
          onClick={() => setOpenIDPopUp(!openIDPopUp)}
        >
          완료
        </button>
      </div>
    </div>
  );
}
