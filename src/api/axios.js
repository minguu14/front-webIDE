import axios from "axios";

export const login = async (username, password) => {
  const result = await axios.post(
    "https://9c4f-112-218-243-204.ngrok-free.app/members/login",
    { username, password }
  );
  return result.data;
};
