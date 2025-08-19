import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null, // Ou { name: null, email: null } para estrutura consistente
  users: [] // Se você quiser manter uma lista de usuários
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // se quiser manipular o nome ou email do usuario apenas use action.payload.name ou action.payload.email
    // criar usuario e suas info
    createUser: (state, action) => {
      state.currentUser = {
        name: action.payload.name,
        email: action.payload.email,
        address: {
          street: action.payload.address.street,
          number: action.payload.address.number,
        }
      };
    },
    // desloga ususario
    logoutUser: (state) => {
      state.currentUser = null;
      },
    deleteAddress: (state) => {
      if (state.currentUser) {
        state.currentUser.address = {
          street: null,
          number: null,
        };
      }
    },
    fetchUsers: (state) => {
      // Aqui você pode implementar a lógica para buscar usuários, se necessário.
      // Por enquanto, apenas um alerta informando que a função não está implementada.
      alert("Função de busca de ususarios ainda não implementada.");
    }
  }
});

export const { createUser, logoutUser, deleteAddress, fetchUsers } = userSlice.actions;
export default userSlice.reducer;