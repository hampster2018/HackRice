import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  events: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    updateEvent: (state, action, date, index) => {
      state.events[date][index] = action.payload;
    },
  },
});

export const { setEmail, setEvents, updateEvent } = userSlice.actions;

export default userSlice.reducer;
