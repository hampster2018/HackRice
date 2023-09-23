import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  points: 1470,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
