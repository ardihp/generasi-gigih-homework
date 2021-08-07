import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";
import selectedSlice from "./selectedSlice";
import trackSlice from "./trackSlice";
import playlistSlice from "./playlistSlice";

export default configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
    track: trackSlice,
    selected: selectedSlice,
    playlist: playlistSlice
  }
});