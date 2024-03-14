import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";
import InputBox from "../component/InputBox";
import { useState } from "react";
import { useAppDispatch } from "../store/hook";
import { exchangePassword } from "../store/reducers/usersSlice";

export default function CheckPassword({ foundIndex }: any) {
  const dispatch = useAppDispatch();
  const [changePw, setChangePw] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const changePassword = () => {
    if (changePw === checkPw && foundIndex) {
      const newFoundIndex = Object.assign(foundIndex);
      newFoundIndex["password"] = checkPw;
      dispatch(exchangePassword(newFoundIndex));
    }
  };
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
        <input
          type="password"
          autoComplete="false"
          value={changePw}
          placeholder="이름"
          className="w-96 h-11 border-2 rounded p-6 mb-2"
          onChange={(e) => {
            setChangePw(e.target.value);
          }}
        />
      </div>
      <div className="mb-14">
        <div className="flex relative">
          비밀번호 확인
          <div className="text-red-500 absolute left-[86px] bottom-1">*</div>
        </div>
        <input
          type="password"
          value={checkPw}
          autoComplete="false"
          placeholder="이름"
          className="w-96 h-11 border-2 rounded p-6 mb-2"
          onChange={(e) => {
            setCheckPw(e.target.value);
          }}
        />
      </div>
      <Link to="/find-id&password">
        <button
          className="w-96 h-11 rounded bg-blue-950 text-white"
          onClick={() => {
            changePassword();
          }}
        >
          완료
        </button>
      </Link>
    </div>
  );
}
