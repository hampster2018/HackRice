import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  points: 1470,
  events: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setEvents: (state, action) => {
      console.log(action.payload);
      state.events = action.payload;
    },
    updateEvent: (state, action, date, index) => {
      state.events[date][index] = action.payload;
    },
    addEvent: (state, action) => {
      console.log(state.events);
      state.events[action.payload.date].push(action.payload.events);
    },
  },
});

export const { setEmail, setEvents, updateEvent, addEvent } = userSlice.actions;

export default userSlice.reducer;
