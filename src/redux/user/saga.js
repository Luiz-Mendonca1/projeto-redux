import { all, takeEvery } from "redux-saga/effects";

function* fetchUsers() {
    alert("Função de busca de usuários ainda não implementada.");
}

export default function* all() {
    takeEvery('user/fetchUsers', fetchUsers);
}