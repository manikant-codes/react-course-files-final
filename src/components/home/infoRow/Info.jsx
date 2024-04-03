import React from "react";

function Info(props) {
  const { title, desc, setIsContentFirst, isContentFirst } = props;

  function handleClick() {
    setIsContentFirst(!isContentFirst);
  }

  return (
    <div className="infoRowContainerInfo">
      <h2 style={{ color: "#4a148c", fontSize: "2rem" }}>{title}</h2>
      <p>{desc}</p>
      <button style={{ width: "fit-content" }} onClick={handleClick}>
        Know More
      </button>
    </div>
  );
}

export default Info;
