import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy, refill } from "../redux/slices/cakeSlice";
import { buyIcecream, refillIcecrem } from "../redux/slices/icecreamSlice";

function Home() {
  const [input, setInput] = useState("");
  const [inputIcecream, setInputIcecream] = useState("");

  const cake = useSelector((store) => {
    return store.cake;
  });

  const icecream = useSelector((store) => {
    return store.icecream;
  });

  const dispatch = useDispatch();

  function handleBuy() {
    // dispatch({ type: "cake/buy", payload: undefined });
    // console.log(buy());
    dispatch(buy());
  }

  function handleRefill() {
    dispatch(refill(input));
  }

  function handleChange(e) {
    setInput(Number(e.target.value));
  }

  function handleBuyIcecream() {
    dispatch(buyIcecream());
  }

  function handleRefillIcecream() {
    dispatch(refillIcecrem(inputIcecream));
  }

  function handleChangeIcecream(e) {
    setInputIcecream(Number(e.target.value));
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
        <h1>My Cake Shop</h1>
      </div>
      <div
        style={{
          margin: "auto",
          maxWidth: "400px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <p style={{ fontSize: "2rem" }}>
          Number of Cakes: {cake.numberOfCakes}
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="number"
            style={{ padding: "6px 16px" }}
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleRefill}>Refill Cake</button>
        </div>
        <button onClick={handleBuy}>Buy Cake</button>
      </div>
      <div
        style={{
          margin: "auto",
          maxWidth: "400px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <p style={{ fontSize: "2rem" }}>
          Number of Icecreams: {icecream.numberOfIcecreams}
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="number"
            style={{ padding: "6px 16px" }}
            value={inputIcecream}
            onChange={handleChangeIcecream}
          />
          <button onClick={handleRefillIcecream}>Refill Icecream</button>
        </div>
        <button onClick={handleBuyIcecream}>Buy Icecream</button>
      </div>
    </div>
  );
}

export default Home;
