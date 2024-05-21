import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return fetch("httpss://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: false,
    loading: false,
  },
  reducers: {
    // getUsers: (state, action) => {
    //   state.loading = true;
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       state.users = data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       state.error = error;
    //       state.users = [];
    //     })
    //     .finally(() => {
    //       state.loading = false;
    //     });
    // },
  },
  // extraReducers: {
  //   [fetchUsers.pending]: (prevState, action) => {},
  //   ["users/fetchUsers/pending"]: (prevState, action) => {},
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (prevState, action) => {
      prevState.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (prevState, action) => {
      prevState.loading = false;
      prevState.users = action.payload;
      prevState.error = false;
    });
    builder.addCase(fetchUsers.rejected, (prevState, action) => {
      prevState.loading = false;
      prevState.users = [];
      prevState.error = action.payload;
    });
  },
});

export const { getUsers } = usersSlice.actions;

const usersReducer = usersSlice.reducer;
export default usersReducer;
