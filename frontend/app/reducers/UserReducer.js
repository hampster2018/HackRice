import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
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
    setId: (state, action) => {
      state.id = action.payload;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      console.log(state.events);
      state.events[action.payload.date].push(action.payload.events);
    },
  },
});

export const { setEmail, setEvents, updateEvent, addEvent, setId } =
  userSlice.actions;

export default userSlice.reducer;
