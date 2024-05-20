import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: false,
    loading: false,
  },
  reducers: {
    getUsers: (state, action) => {
      state.loading = true;
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          state.users = data;
        })
        .catch((error) => {
          console.log(error);
          state.error = error;
          state.users = [];
        })
        .finally(() => {
          state.loading = false;
        });
    },
  },
});

export const { getUsers } = usersSlice.actions;

const usersReducer = usersSlice.reducer;
export default usersReducer;
