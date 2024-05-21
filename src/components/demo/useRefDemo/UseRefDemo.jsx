import React, { useEffect, useRef } from "react";

function UseRefDemo() {
  const divRef = useRef(null);

  useEffect(() => {
    // const myDiv = document.getElementById("my-div");
    // myDiv.style.backgroundColor = "green";
    // console.log("inside", divRef.current);
    divRef.current.style.backgroundColor = "orange";
  }, []);

  //   console.log("outside", divRef);

  return (
    <div>
      <div
        ref={divRef}
        // id="my-div"
        style={{ height: "100px", width: "100px", backgroundColor: "gray" }}
      ></div>
    </div>
  );
}

export default UseRefDemo;
