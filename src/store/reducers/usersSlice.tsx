import { createSlice } from "@reduxjs/toolkit";

export interface Users {
  id: number;
  name: string;
  email: string;
  loginId: string;
  password: string;
  birthDate: string;
}

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    signup(state: Users[], action) {
      console.log(action.payload);
      state.push({
        id: state.length,
        name: action.payload.name,
        email: action.payload.email,
        loginId: action.payload.loginId,
        password: action.payload.password,
        birthDate: action.payload.birthDate,
      });
    },
    exchangePassword(state: Users[], action) {
      console.log(action.payload);
      const targetState = state.find(
        (user) => user.loginId === action.payload.foundIndex.loginId
      );
      if (targetState) {
        targetState["password"] = action.payload.newpassword;
      }
    },
  },
});

export const { signup, exchangePassword } = usersSlice.actions;

export default usersSlice.reducer;
