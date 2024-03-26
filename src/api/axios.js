import axios from "axios";
import { setUser } from "../store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";

//로그인
export const login = async (username, password, dispatch) => {
  // dispatch 파라미터 추가
  try {
    const result = await axios.post("http://43.202.87.84/members/login", {
      username,
      password,
    });

    return result.data;
  } catch {
    return "failed to login";
  }
};

// 회원가입
export const menbershipApi = async (name, email, username, password, birth) => {
  const result = await axios.post("http://43.202.87.84/members/register", {
    name: name,
    email: email,
    username: username,
    password: password,
    birth: birth,
  });
  return result.data;
};

// 등록된 사용자 아이디 데이터를 가져오기
export const getUserId = async (userEmail, idName, idBirthDate) => {
  try {
    const response = await axios.get(
      "http://43.202.87.84/members/findUsername",
      {
        params: {
          email: userEmail,
          name: idName,
          birth: idBirthDate,
        },
      }
    );
    return response.data;
  } catch {
    return "error";
  }
};

// 등록된 사용자 비밀번호 데이터를 가져오기
export const getUserPW = async (userid, pwName, pwBirthDate) => {
  const response = await axios.post(
    "http://43.202.87.84/members/validateUser",
    {
      username: userid,
      name: pwName,
      birth: pwBirthDate,
    }
  );
  return response.data;
};

// 등록된 사용자 비밀번호 데이터 변경
export const changeUserPassword = async (userid, changePw) => {
  const response = await axios.post(
    "http://43.202.87.84/members/reset-password",
    {
      username: userid,
      newPassword: changePw,
    }
  );
  return response.data;
};
