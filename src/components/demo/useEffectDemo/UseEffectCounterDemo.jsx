import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

// const msgs = ["Breath In...", "Hold...", "Breath Out...", "Hold..."];

function UseEffectCounterDemo() {
  const [count, setCount] = useState(4);
  const [msg, setMsg] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const id = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        } else {
          setCount(4);
          if (msg < 3) {
            setMsg(msg + 1);
          } else {
            setMsg(0);
          }
        }
      }, 1000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [count, msg, isPlaying]);

  function handlePlayStop() {
    setIsPlaying(!isPlaying);
  }

  function getSize() {
    if (msg === 0) {
      return 500 - count * 100;
    } else if (msg === 1) {
      return 400;
    } else if (msg === 2) {
      return count * 100;
    } else {
      return 100;
    }
  }

  function getMsg() {
    if (msg === 0) {
      return <span style={{ fontSize: "1rem" }}>Inhale {count}</span>;
    } else if (msg === 1 || msg === 3) {
      return <span style={{ fontSize: "4rem" }}>{count}</span>;
    } else {
      return <span style={{ fontSize: "1rem" }}>Exhale {count}</span>;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "400px",
          width: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#036264",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            width: `${getSize()}px`,
            height: `${getSize()}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "#e0829d",
            borderRadius: "50%",
            transition: "all 0.5s ease",
          }}
        >
          <p style={{ fontSize: "1rem", color: "white" }}>{getMsg()}</p>
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={handlePlayStop}
          style={{ backgroundColor: "#8f5774", borderRadius: "50%" }}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
      </div>
    </div>
  );
}

export default UseEffectCounterDemo;
