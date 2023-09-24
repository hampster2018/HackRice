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
      console.log(action.payload);
      state.events = action.payload;
    },
  },
});

export const { setEmail, setEvents, setId } = userSlice.actions;

export default userSlice.reducer;
