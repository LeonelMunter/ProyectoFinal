import { createSlice } from "@reduxjs/toolkit";

const theme = localStorage.theme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.theme = state.theme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
