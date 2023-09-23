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
    addEvents: (state, action) => {
      state.events.push(action.payload);
    },
  },
});

export const { setEmail, addEvents } = userSlice.actions;

export default userSlice.reducer;
