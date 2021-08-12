import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {
    display_name: "",
    images: [{
      height: 0,
      url: "",
      width: 0
    }
    ]
  }
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { getToken, login } = tokenSlice.actions;
export default tokenSlice.reducer;
