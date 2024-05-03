import { useState } from "react";

function FirstFunctionComponent(props) {
  const [msg, setMsg] = useState("Hello");

  function handleChangeMsg() {
    setMsg("Good Afternoon");
  }

  return (
    <>
      <h1>{msg}</h1>
      <p>Today's color is {props.color}</p>
      <p>From Function Component</p>
      <button onClick={handleChangeMsg}>Change Msg</button>
    </>
  );
}

export default FirstFunctionComponent;
