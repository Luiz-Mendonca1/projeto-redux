import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null // Ou { name: null, email: null } para estrutura consistente
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.currentUser = {
        name: action.payload.name,
        email: action.payload.email,
        address: {
          street: null,
          number: null,
        }
      };
    },
    // Adicione caso precise resetar
    clearUser: (state) => {
      state.currentUser = null;
    }
  }
});

export const { createUser, clearUser } = userSlice.actions;
export default userSlice.reducer;