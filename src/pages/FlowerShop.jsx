import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyOrchid,
  buyRose,
  buySunflower,
  restockOrchids,
  restockRoses,
  restockSunflowers,
} from "../redux/slices/flowersSlice";

function FlowerShop() {
  const [roseInput, setRoseInput] = useState("");
  const [sunflowerInput, setSunflowerInput] = useState("");

  const flowers = useSelector((store) => {
    return store.flowers;
  });

  const dispatch = useDispatch();

  function handleBuyRose() {
    dispatch(buyRose());
  }
  function handleRestockRoses() {
    dispatch(restockRoses(roseInput));
  }

  function handleBuySunflower() {
    dispatch(buySunflower());
  }
  function handleRestockSunflowers() {
    dispatch(restockSunflowers(sunflowerInput));
  }

  function handleBuyOrchid() {
    dispatch(buyOrchid());
  }
  function handleRestockOrchids() {
    dispatch(restockOrchids());
  }

  function handleRoseChange(e) {
    setRoseInput(e.target.value);
  }

  function handleSunflowerChange(e) {
    setSunflowerInput(e.target.value);
  }

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-purple-700 mb-4">Flower Shop</h2>
      <div className="mb-4">
        <p>Cash: ₹{flowers.cash}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-purple-200 p-4 rounded-lg">
          <p className="text-2xl mb-4">Number of Roses: {flowers.rose}</p>
          <input
            type="text"
            className="rounded-full my-4"
            value={roseInput}
            onChange={handleRoseChange}
          />
          <div className="flex items-center gap-4">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              onClick={handleBuyRose}
            >
              Buy Rose
            </button>
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              onClick={handleRestockRoses}
            >
              Restock Roses
            </button>
          </div>
        </div>
        <div className="bg-purple-200 p-4 rounded-lg">
          <p className="text-2xl mb-4">
            Number of Sunflower: {flowers.sunflower}
          </p>
          <input
            type="text"
            className="rounded-full my-4"
            value={sunflowerInput}
            onChange={handleSunflowerChange}
          />
          <div className="flex items-center gap-4">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              onClick={handleBuySunflower}
            >
              Buy Sunflower
            </button>
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              onClick={handleRestockSunflowers}
            >
              Restock Sunflowers
            </button>
          </div>
        </div>
        <div className="bg-purple-200 p-4 rounded-lg">
          <p className="text-2xl mb-4">Number of Orchids: {flowers.orchid}</p>
          <div className="flex items-center gap-4">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              onClick={handleBuyOrchid}
            >
              Buy Orchid
            </button>
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              onClick={handleRestockOrchids}
            >
              Restock Orchids
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowerShop;
