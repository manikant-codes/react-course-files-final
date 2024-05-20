import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myStore from "../store";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      return response.json();
    }
  );
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    error: false,
  },
  reducers: {
    addToCart: (prevState, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (prevState, action) => {
      prevState.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (prevState, action) => {
      prevState.loading = false;
      prevState.posts = action.payload;
      prevState.error = false;
    });
    builder.addCase(fetchPosts.rejected, (prevState, action) => {
      prevState.loading = false;
      prevState.posts = [];
      prevState.error = true;
    });
  },
});

const postsRecucer = postsSlice.reducer;
export default postsRecucer;
