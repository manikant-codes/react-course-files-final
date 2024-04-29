import React from "react";
// import MemoDemo from "./components/demos/memoDemo/MemoDemo";
// import UseMemoDemo from "./components/demos/useMemoDemo/UseMemoDemo";
// import UseRefDemo from "./components/demos/useRefDemo/UseRefDemo";
// import UseContextDemo from "./components/demos/useContextDemo/UseContextDemo";
// import UseMemoDemo from "./components/demos/useMemoDemo/UseMemoDemo";
import UseReducerCounterDemo from "./components/demos/useReducerDemo/UseReducerCounterDemo";
import UseReducerTodoDemo from "./components/demos/useReducerDemo/UseReducerTodoDemo";

function Demo() {
  return (
    <div>
      {/* <UseContextDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseReducerCounterDemo /> */}
      <UseReducerTodoDemo />
    </div>
  );
}

export default Demo;
