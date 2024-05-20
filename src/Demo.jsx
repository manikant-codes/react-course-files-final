import React from "react";
import UseEffectDemo from "./components/demo/useEffectDemo/UseEffectDemo";
import UseEffectCounterDemo from "./components/demo/useEffectDemo/UseEffectCounterDemo";
import MemoDemo from "./components/demo/memoDemo/MemoDemo";
import UseCallbackDemo from "./components/demo/useCallbackDemo/UseCallbackDemo";
import UseMemoDemo from "./components/demo/useMemoDemo/UseMemoDemo";

function Demo() {
  return (
    <>
      {/* <UseEffectDemo /> */}
      {/* <UseEffectCounterDemo /> */}
      {/* <MemoDemo /> */}
      {/* <UseCallbackDemo /> */}
      <UseMemoDemo />
    </>
  );
}

export default Demo;
