import React from "react";
import UseRefDemo from "./components/demos/useRefDemo/UseRefDemo";
import PrevStateExample from "./components/demos/useRefDemo/PrevStateExample";
import UseMemoDemo from "./components/demos/useMemoDemo/UseMemoDemo";
// import MemoDemo from "./components/demos/memoDemo/MemoDemo";
// import UseCallbackDemo from "./components/demos/useCallbackDemo/UseCallbackDemo";

function Demo() {
  return (
    <div>
      {/* <MemoDemo /> */}
      {/* <UseCallbackDemo /> */}
      <UseMemoDemo />
      {/* <PrevStateExample /> */}
    </div>
  );
}

export default Demo;
