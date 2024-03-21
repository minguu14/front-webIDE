import React from "react";
import InputBox from "../components/InputBox";
import { Link, Router, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector } from "../store/hook";
import CheckIDPopUp from "../components/CheckIDPopUp";
import FailIDPopUp from "../components/FaiIDPopUp";
import CheckPassword from "./CheckPassword";
import { getUserId, getUserPW } from "../api/axios";

export default function FindIDPassword({
  // foundIndex,
  // setFoundIndex,
  userid,
  setUserid,
}: any) {
  const [idName, setIdName] = useState("");
  const [pwName, setPwName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [idBirthDate, setIdBirthDate] = useState("");
  const [pwBirthDate, setPwBirthDate] = useState("");
  const [foundId, setFoundId] = useState("");
  const [foundName, setFoundName] = useState("");
  const [failIDPopUp, setFilIDPopUp] = useState(false);
  const [foundEmail, setFoundEmail] = useState("");
  const [foundBirth, setFoundBirth] = useState("");
  const [openIDPopUp, setOpenIDPopUp] = useState(false);

  const router = useNavigate();
  //redux-hook
  const users = useAppSelector((state) => state.persist.users);

  // 등록된 사용자 id 데이터 호출
  const getUsersIdApi = async (email: any, name: any, birth: any) => {
    const response = await getUserId(email, name, birth);
    if (response == "error") {
      setFilIDPopUp(!failIDPopUp);
    } else {
      setFoundName(response.name);
      setFoundId(response.username);
      setOpenIDPopUp(!openIDPopUp);
    }

    // try {
    //   const response = await getUserId(email, name, birth);
    //   console.log(response.name); // 받아온 데이터를 출력하거나 다른 처리를 수행합니다.
    //   setFoundName(response.name);
    //   setFoundId(response.username);
    //   setOpenIDPopUp(!openIDPopUp);
    // } catch (error) {
    //   setFilIDPopUp(!failIDPopUp);
    //   console.error("Error fetching users:", error);
    //   // 에러 처리를 수행합니다.
    // }
  };
  // 등록된 사용자 pw 데이터 호출
  const getUsersPwApi = async (username: any, name: any, birth: any) => {
    try {
      const response = await getUserPW(username, name, birth);
      console.log(response); // 받아온 데이터를 출력하거나 다른 처리를 수행합니다.
      router("/find-id&password/checkpassword");
    } catch (error) {
      console.error("Error fetching users:", error);
      setFilIDPopUp(!failIDPopUp);
      // 에러 처리를 수행합니다.
    }
  };

  // const FindId = () => {
  //   const usersEmail = users.map((data: any) => data.email);
  //   const userName = users.map((data: any) => data.name);
  //   const birth = users.map((data: any) => data.birthDate);
  //   // 입력한 인덱스 찾는 함수
  //   console.log(users);
  //   function findIdByNameAndEmail(
  //     users: any,
  //     name: any,
  //     email: any,
  //     birth: any
  //   ) {
  //     for (let i = 0; i < users.length; i++) {
  //       if (
  //         users[i].name === name &&
  //         users[i].email === email &&
  //         users[i].birthDate === birth
  //       ) {
  //         setFoundEmail(users[i].emainl);
  //         setFoundName(users[i].name);
  //         setFoundBirth(users[i].birthDate);
  //         setFoundId(users[i].loginId);
  //         return;
  //       }
  //     }
  //     setFoundEmail("");
  //     setFoundName("");
  //     setFoundBirth("");
  //     setFoundId("");
  //   }

  //   if (
  //     usersEmail.includes(userEmail) &&
  //     userName.includes(idName) &&
  //     birth.includes(idBirthDate)
  //   ) {
  //     findIdByNameAndEmail(users, idName, userEmail, idBirthDate);
  //     setOpenIDPopUp(!openIDPopUp);
  //     console.log(openIDPopUp);
  //   } else {
  //     console.log("찾기실패");
  //     setFilIDPopUp(!failIDPopUp);
  //   }
  // };

  // 비밀번호 index찾기

  // const FindPw = () => {
  //   const usersId = users.map((data: any) => data.loginId);
  //   const usersName = users.map((data: any) => data.name);
  //   const birth = users.map((data: any) => data.birthDate);

  //   function findPwByIDNameBirth(users: any, id: any, name: any, birth: any) {
  //     for (let i = 0; i < users.length; i++) {
  //       if (
  //         users[i].loginId === id &&
  //         users[i].name === name &&
  //         users[i].birthDate === birth
  //       ) {
  //         setFoundIndex(users[i]);
  //         return;
  //       }
  //     }
  //   }

  //   if (
  //     usersId.includes(userid) &&
  //     usersName.includes(pwName) &&
  //     birth.includes(pwBirthDate)
  //   ) {
  //     findPwByIDNameBirth(users, userid, pwName, pwBirthDate);
  //     router("/find-id&password/checkpassword");
  //     console.log(foundIndex);
  //     console.log("성공");
  //   } else {
  //     setFilIDPopUp(!failIDPopUp);
  //     console.log("실패");
  //   }
  // };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <header className="flex mb-10">
          <div className="font-semibold text-sky-500 text-3xl mr-3">아이디</div>
          <div className="font-semibold text-3xl">찾기</div>
        </header>
        <div>
          <div className="flex relative ">
            이메일
            <div className="text-red-500 absolute left-10 bottom-1">*</div>
          </div>
          <input
            type="text"
            value={userEmail}
            placeholder="이메일"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex relative">
            이름
            <div className="text-red-500 absolute left-[26px] bottom-1">*</div>
          </div>
          <input
            type="text"
            value={idName}
            placeholder="이름"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            onChange={(e) => {
              setIdName(e.target.value);
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
            value={idBirthDate}
            placeholder="19950205"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            onChange={(e) => {
              setIdBirthDate(e.target.value);
            }}
          />
        </div>

        <button
          className="w-96 h-11 rounded bg-blue-950 text-white"
          // onClick={FindId}
          onClick={() => getUsersIdApi(userEmail, idName, idBirthDate)}
        >
          완료
        </button>
      </div>
      <hr className="w-[1px] h-[380px] bg-gray-300 mx-12" />
      <div>
        <header className="flex mb-10">
          <div className="font-semibold text-sky-500 text-3xl mr-3">
            비밀번호
          </div>
          <div className="font-semibold text-3xl">찾기</div>
        </header>
        <div>
          <div className="flex relative ">
            아이디
            <div className="text-red-500 absolute left-10 bottom-1">*</div>
          </div>
          <input
            type="text"
            value={userid}
            placeholder="아이디"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            onChange={(e) => {
              setUserid(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex relative">
            이름
            <div className="text-red-500 absolute left-[26px] bottom-1">*</div>
          </div>
          <input
            type="text"
            value={pwName}
            placeholder="이름"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            onChange={(e) => {
              setPwName(e.target.value);
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
            value={pwBirthDate}
            placeholder="19950205"
            className="w-96 h-11 border-2 rounded p-6 mb-2"
            onChange={(e) => {
              setPwBirthDate(e.target.value);
            }}
          />
        </div>
        <button
          className="w-96 h-11 rounded bg-blue-950 text-white"
          // onClick={FindPw}
          onClick={() => getUsersPwApi(userid, pwName, pwBirthDate)}
        >
          완료
        </button>
      </div>
      {openIDPopUp && (
        <CheckIDPopUp
          foundName={foundName}
          foundId={foundId}
          openIDPopUp={openIDPopUp}
          setOpenIDPopUp={setOpenIDPopUp}
        />
      )}
      {failIDPopUp && (
        <FailIDPopUp failIDPopUp={failIDPopUp} setFilIDPopUp={setFilIDPopUp} />
      )}
      {/* <CheckPassword foundIndex={foundIndex}></CheckPassword> */}
    </div>
  );
}
