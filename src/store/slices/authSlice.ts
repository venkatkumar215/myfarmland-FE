// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface AuthState {
//   isLoggedIn: boolean;
//   token: string | null;
//   user: {
//     id: string;
//     email: string;
//   } | null;
// }

// const initialState: AuthState = {
//   isLoggedIn: false,
//   token: null,
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (
//       state,
//       action: PayloadAction<{
//         token: string;
//         user: { id: string; email: string };
//       }>
//     ) => {
//       state.isLoggedIn = true;
//       state.token = action.payload.token;
//       state.user = action.payload.user;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.token = null;
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

// import { configureStore, createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice();

// export const { setToken, clearToken } = authSlice.actions;

// export const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//   },
// });
