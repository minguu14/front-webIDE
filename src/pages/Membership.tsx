import React from "react";
import InputBox from "../components/InputBox";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import PopUp from "../components/PopUp";
import { signup } from "../store/reducers/usersSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { menbershipApi } from "../api/axios";

export default function Membership() {
  const dispatch = useAppDispatch();

  const useridRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const birthDateRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  let [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");

  const changeEvent = () => {
    setOpen(!open);
  };
  /*redux 회원가입 */
  // const signupApi = async () => {
  //   dispatch(
  //     signup({
  //       name: name,
  //       email: email,
  //       username: username,
  //       password: password,
  //       birth: birth,
  //     })
  //   );
  // };

  // 회원가입 API 호출
  const signupApi = async () => {
    try {
      const result = await menbershipApi(
        name,
        email,
        username,
        password,
        birth
      ); // membership 함수 호출
      if ((result && result.code === 201) || 200) {
        console.log("회원가입 성공:", result);
        // 성공 시 필요한 작업 수행
      } else {
        console.log("회원가입 실패");
        // 실패 시 필요한 작업 수행
      }
    } catch (error) {
      console.error("회원가입 요청 중 오류 발생:", error);
      // 오류 처리 필요
    }
  };
  return (
    <div>
      <div
        className={`${
          open
            ? "invisible w-0 h-0"
            : "w-screen h-screen flex flex-col justify-center items-center"
        }`}
      >
        <header className="flex">
          <div className="font-semibold text-sky-500 text-3xl mr-3">
            회원가입
          </div>
          <div className="font-semibold text-3xl">입력</div>
        </header>

        <div>
          <div className="flex relative ">
            이름
            <div className="text-red-500 absolute left-7 bottom-1">*</div>
          </div>
          <input
            type="name"
            value={name}
            placeholder={"이름"}
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            ref={nameRef}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex relative ">
            이메일
            <div className="text-red-500 absolute left-10 bottom-1">*</div>
          </div>
          <input
            type="text"
            value={email}
            placeholder="이메일"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            ref={emailRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex relative">
            ID<div className="text-red-500 absolute left-3 bottom-1">*</div>
          </div>
          <input
            type="text"
            value={username}
            placeholder="ID"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            ref={useridRef}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex relative">
            비밀번호
            <div className="text-red-500 absolute left-[54px] bottom-1">*</div>
          </div>
          <input
            type="password"
            value={password}
            placeholder="비밀번호"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            ref={passwordRef}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-14">
          <div className="flex relative">
            생년월일 8자리
            <div className="text-red-500 absolute left-24 bottom-1">*</div>
          </div>
          <input
            type="number"
            value={birth}
            placeholder="19950205"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            ref={birthDateRef}
            onChange={(e) => {
              setBirth(e.target.value);
            }}
          />
        </div>
        <button
          className="w-96 h-11 rounded bg-blue-950 text-white"
          onClick={() => {
            signupApi();
            changeEvent();
          }}
        >
          완료
        </button>
      </div>
      {open && <PopUp />}
    </div>
  );
}
