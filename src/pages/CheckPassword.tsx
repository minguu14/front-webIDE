import React, { SetStateAction } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import { useState } from "react";
import { useAppDispatch } from "../store/hook";
import { exchangePassword } from "../store/reducers/usersSlice";
import { changeUserPassword } from "../api/axios";
// redux  내려주기
// export default function CheckPassword({ foundIndex }: any) {
export default function CheckPassword({ userid }: any) {
  const dispatch = useAppDispatch();
  const [changePw, setChangePw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const router = useNavigate();
  //redux 비밀번호 변경
  // const changePassword = () => {
  //   if (changePw === checkPw && foundIndex) {
  //     // const newFoundIndex = JSON.parse(JSON.stringify(foundIndex));

  //     // newFoundIndex["password"] = checkPw;
  //     dispatch(
  //       exchangePassword({ foundIndex: foundIndex, newpassword: checkPw })
  //     );
  //   }
  // };

  // 비빌번호 데이터 변경

  const changePasswordApi = async (username: any, newPassword: any) => {
    try {
      const response = await changeUserPassword(username, newPassword);
      console.log(response);
      router("/find-id&password");
    } catch (error) {
      console.log("변경 실패");
      console.log(userid);
      console.log(changePw);
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
          placeholder="password"
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
          placeholder="password"
          className="w-96 h-11 border-2 rounded p-6 mb-2"
          onChange={(e) => {
            setCheckPw(e.target.value);
          }}
        />
      </div>

      <button
        className="w-96 h-11 rounded bg-blue-950 text-white"
        // onClick={() => {
        //   changePassword();
        // }}
        onClick={() => changePasswordApi(userid, changePw)}
      >
        완료
      </button>
    </div>
  );
}
