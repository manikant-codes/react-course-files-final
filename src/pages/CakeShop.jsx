import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, refillCake } from "../redux/slices/cakeSlice";
import { buyIcecream, refillIcecream } from "../redux/slices/icecreamSlice";

function CakeShop() {
  const [cakeInput, setCakeInput] = useState();
  const [icecreamInput, setIcecreamInput] = useState();

  const dispatch = useDispatch();

  const numberOfCakes = useSelector((store) => {
    return store.cake.numberOfCakes;
  });

  const numberOfIcecreams = useSelector((store) => {
    return store.icecream.numberOfIcecreams;
  });

  function handleBuyCake() {
    // console.log("buyCake", buyCake());
    dispatch(buyCake());
  }

  function handleBuyIcecream() {
    dispatch(buyIcecream());
  }

  function handleCakeRefill() {
    dispatch(refillCake(cakeInput));
  }

  function handleIcecreamRefill() {
    dispatch(refillIcecream(icecreamInput));
  }

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
          <p>Number of Cakes: {numberOfCakes}</p>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <input
              type="number"
              style={{ padding: "6px", flexGrow: 1 }}
              value={cakeInput}
              onChange={(e) => {
                setCakeInput(Number(e.target.value));
              }}
            />
            <button onClick={handleCakeRefill}>Refill Cake</button>
          </div>
          <button onClick={handleBuyCake}>Buy Cake</button>
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
          <p>Number of Icecreams: {numberOfIcecreams}</p>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <input
              type="number"
              style={{ padding: "6px", flexGrow: 1 }}
              value={icecreamInput}
              onChange={(e) => {
                setIcecreamInput(Number(e.target.value));
              }}
            />
            <button onClick={handleIcecreamRefill}>Refill Icecream</button>
          </div>
          <button onClick={handleBuyIcecream}>Buy Icecream</button>
        </div>
      </div>
    </div>
  );
}

export default CakeShop;
