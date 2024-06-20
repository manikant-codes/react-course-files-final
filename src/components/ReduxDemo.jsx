import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { order, restock } from "../redux/slices/cakeSlice";

function ReduxDemo() {
  const cakes = useSelector((store) => {
    return store.cake.numberOfCakes;
  });

  const dispatch = useDispatch();

  function buyCake() {
    dispatch(order());
  }

  function restockCake() {
    dispatch(restock());
  }

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-purple-700 mb-4">Cake Shop</h2>
      <div className="bg-purple-200 p-4 rounded-lg">
        <p className="text-2xl mb-4">Number of Cakes: {cakes}</p>
        <div className="flex items-center gap-4">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
            onClick={buyCake}
          >
            Buy Cake
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
            onClick={restockCake}
          >
            Restock Cake
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReduxDemo;
