import { createSlice } from "@reduxjs/toolkit";

const language = localStorage.language || navigator.language.substring(0, 2);

const languageSlice = createSlice({
  name: "language",
  initialState: { language },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.language = action.payload;
    },
  },
});

export const selectLanguage = (state) => state.language.language;

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
