import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Exam: "TOEFL",
};
const globalstate = createSlice({
  name: "globalstate",
  initialState,
  reducers: {
    selectExam(state, action) {
      state.Exam = action.payload;
    },
  },
});
export const { selectExam, selectService } = globalstate.actions;
export default globalstate.reducer;
