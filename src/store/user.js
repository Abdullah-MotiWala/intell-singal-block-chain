import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = { token: null, user: null };

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setToken: (state, { payload: token }) => {
      state.token = token;
    },
    setUser: (state, { payload: user }) => {
      state.user = user;
    },
    signOut: state => {
      state.token = null;
      state.user = null;
    }
  }
});

export const { setToken, setUser, signOut } = userSlice.actions;
export const UserReducer = userSlice.reducer;
