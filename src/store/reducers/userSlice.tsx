import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  birth: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser(state: User[], action) {
      state.push({
        id: state.length,
        name: action.payload.name,
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
        birth: action.payload.birth,
      });
    },
    logout(state: User[]) {
      return [];
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
