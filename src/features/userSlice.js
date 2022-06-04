import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      username: null,
      loggedIn: null,
    },
    cart: {
      id: null,
      data: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logged: (state, action) => {
      state.user.username = action.payload;
    },
    cartRedux: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { login, logged, cartRedux } = userSlice.actions;
export const selectUser = (state) => state.user;
export const selectCart = (state) => state.cart;
export default userSlice.reducer;
