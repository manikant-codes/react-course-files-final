import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // ["users/fetchUsers/pending"]: (prevState, action) => {},
    // ["users/fetchUsers/fulfilled"]: (prevState, action) => {},
    // ["users/fetchUsers/rejected"]: (prevState, action) => {},
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
      prevState.error = true;
    });
  },
});

const usersReducer = usersSlice.reducer;
export default usersReducer;
