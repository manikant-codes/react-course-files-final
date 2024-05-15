import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return fetch("httpss://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
});

const initialState = {
  loading: false,
  users: null,
  error: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
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
      prevState.users = null;
      prevState.error = true;
    });
  },
  //   {
  //     [fetchUsers.pending || users/fetchUsers/pending]: (prevState, action) => {},
  //     [fetchUsers.fulfilled]: (prevState, action) => {},
  //     [fetchUsers.rejected]: (prevState, action) => {},
  //   },
});

const usersReducer = userSlice.reducer;
export default usersReducer;
