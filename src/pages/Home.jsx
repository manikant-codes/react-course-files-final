import React, { useContext } from "react";
import { toggleTheme, useGlobal } from "../contexts/GlobalContextProvider";

function Home() {
  const value = useGlobal();
  console.log(value.globalState.theme);
  return (
    <>
      <button
        onClick={() => {
          value.dispatch(toggleTheme());
        }}
      >
        {value.globalState.theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          padding: "32px",
          backgroundColor:
            value.globalState.theme === "light" ? "white" : "#212121",
          color: value.globalState.theme === "light" ? "initial" : "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor:
              value.globalState.theme === "light" ? "#eeeeee" : "#424242",
            border:
              value.globalState.theme === "light"
                ? "solid 1px #bdbdbd"
                : "solid 1px #616161",
          }}
        >
          <h1>Home</h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            obcaecati enim deleniti quaerat, impedit omnis doloremque quidem est
            provident quia minima magnam. At laboriosam corporis voluptas
            repellendus soluta amet nihil!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor:
              value.globalState.theme === "light" ? "#eeeeee" : "#424242",
            border:
              value.globalState.theme === "light"
                ? "solid 1px #bdbdbd"
                : "solid 1px #616161",
          }}
        >
          <h1>Home</h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            obcaecati enim deleniti quaerat, impedit omnis doloremque quidem est
            provident quia minima magnam. At laboriosam corporis voluptas
            repellendus soluta amet nihil!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor:
              value.globalState.theme === "light" ? "#eeeeee" : "#424242",
            border:
              value.globalState.theme === "light"
                ? "solid 1px #bdbdbd"
                : "solid 1px #616161",
          }}
        >
          <h1>Home</h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            obcaecati enim deleniti quaerat, impedit omnis doloremque quidem est
            provident quia minima magnam. At laboriosam corporis voluptas
            repellendus soluta amet nihil!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor:
              value.globalState.theme === "light" ? "#eeeeee" : "#424242",
            border:
              value.globalState.theme === "light"
                ? "solid 1px #bdbdbd"
                : "solid 1px #616161",
          }}
        >
          <h1>Home</h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            obcaecati enim deleniti quaerat, impedit omnis doloremque quidem est
            provident quia minima magnam. At laboriosam corporis voluptas
            repellendus soluta amet nihil!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
