import React from "react";

function CakeShop() {
  return (
    <div>
      <div
        style={{
          padding: "24px 32px",
          backgroundColor: "#eeeeee",
          borderBottom: "solid 1px #bdbdbd",
        }}
      >
        <h1>Cake Shop</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          padding: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "#eeeeee",
            padding: "32px",
            border: "solid 1px #bdbdbd",
            borderRadius: "8px",
            width: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <input type="number" style={{ padding: "6px", flexGrow: 1 }} />
            <button>Refill Cake</button>
          </div>
          <button>Buy Cake</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "#eeeeee",
            padding: "32px",
            border: "solid 1px #bdbdbd",
            borderRadius: "8px",
            width: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <input type="number" style={{ padding: "6px", flexGrow: 1 }} />
            <button>Refill Icecream</button>
          </div>
          <button>Buy Icecream</button>
        </div>
      </div>
    </div>
  );
}

export default CakeShop;
