import React, { useState } from "react";
import { getUsersData } from "../../../services/apiServices";

function FetchDemo() {
  const [users, setUsers] = useState(null);
  //   function getUsersData() {
  //     const promise = fetch("https://jsonplaceholder.typicode.com/users");
  //     promise
  //       .then((response) => {
  //         const promiseJSON = response.json();
  //         promiseJSON
  //           .then((data) => {
  //             console.log("data", data);
  //           })
  //           .catch((error) => {
  //             console.log("error", error);
  //           });
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //       });
  //   }

  return (
    <div>
      <div style={{ padding: "24px 32px", backgroundColor: "#eeeeee" }}>
        <h1>Fetch Demo</h1>
      </div>
      <div style={{ padding: "32px", paddingBottom: "0px" }}>
        <button
          onClick={() => {
            const placeholder = getUsersData();
            console.log("placeholder", placeholder);
            placeholder.then((data) => {
              setUsers(data);
            });
          }}
        >
          Get Data
        </button>
      </div>

      <div
        style={{
          padding: "32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "12px",
        }}
      >
        {users?.map((value) => {
          return (
            <div
              style={{
                backgroundColor: "#eeeeee",
                padding: "12px",
                border: "solid 1px #bdbdbd",
                borderRadius: "8px",
              }}
            >
              <p>Name: {value.name}</p>
              <p>Email: {value.email}</p>
              <p>Phone: {value.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchDemo;
