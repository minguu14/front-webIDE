import React from "react";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex mb-64 mr-20">
          <div className="w-40 h-40 border rounded-full flex justify-center items-center mr-8">
            picture
          </div>
          <div className="">
            <div className="font-semibold h-10 text-2xl">홍길동</div>
            <p className="w-60">안녕하세요. 자기소개</p>
          </div>
        </div>
        <div>
          <div>
            <div className="flex relative ">이메일</div>
            <InputBox type={"text"} placeholder={"이메일"} />
          </div>
          <div>
            <div className="flex relative">ID</div>
            <InputBox type={"text"} placeholder={"ID"} />
          </div>
          <div>
            <div className="flex relative">비밀번호</div>
            <InputBox type={"password"} placeholder={"비밀번호"} />
          </div>
          <div>
            <div className="flex relative">이름</div>
            <InputBox type={"text"} placeholder={"이름"} />
          </div>
          <div className="">
            <div className="flex relative">생년월일 8자리</div>
            <InputBox type={"number"} placeholder={"950205"} />
          </div>
        </div>
      </div>
    </div>
  );
}
