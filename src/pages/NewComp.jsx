import { Button } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTotal } from "../redux/slices/cartSlice";
import myStore from "../redux/store";
import { fetchPosts } from "../redux/slices/postsSlice";
import { useEffect } from "react";

const { dispatch, getState } = myStore;

function NewComp() {
  const posts = useSelector((store) => {
    return store.posts;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log("posts", posts);

  //   function handleReset() {
  //     const action = resetTotal();
  //     console.log("action", action);
  //     dispatch(action);
  //   }

  //   console.log(
  //     "fetchPosts",
  //     fetchPosts()(dispatch, getState)
  //       .unwrap()
  //       .then((data) => {
  //         console.log(data);
  //       })
  //   );

  return (
    <div>
      Total: {} <Button>Reset Total</Button>
    </div>
  );
}

export default NewComp;
