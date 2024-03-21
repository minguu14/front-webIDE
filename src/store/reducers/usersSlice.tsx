import { createSlice } from "@reduxjs/toolkit";

export interface Users {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  birth: string;
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
        username: action.payload.username,
        password: action.payload.password,
        birth: action.payload.birth,
      });
    },
    exchangePassword(state: Users[], action) {
      console.log(action.payload);
      const targetState = state.find(
        (user) => user.username === action.payload.foundIndex.username
      );
      if (targetState) {
        targetState["password"] = action.payload.newpassword;
      }
    },
  },
});

export const { signup, exchangePassword } = usersSlice.actions;

export default usersSlice.reducer;
