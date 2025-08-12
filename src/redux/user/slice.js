import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 1,
    name: "John Doe",
    email: 'email@test.com',
    adress: null,
  }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    }
});

export default userSlice.reducer;