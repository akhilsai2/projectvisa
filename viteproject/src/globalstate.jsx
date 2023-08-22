import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Exam: "TOEFL",
  Study: "United Kingdom",
  Service: "Complete Application",
};
const globalstate = createSlice({
  name: "globalstate",
  initialState,
  reducers: {
    selectExam(state, action) {
      state.Exam = action.payload;
    },
    selectStudy(state, action) {
      state.Study = action.payload;
    },
    selectService(state, action) {
      state.Service = action.payload;
    },
  },
});
export const { selectExam, selectService, selectStudy } = globalstate.actions;
export default globalstate.reducer;
