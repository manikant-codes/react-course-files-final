import React from "react";
import FormA from "../components/FormA";

function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="max-w-[350px] w-full bg-purple-300 p-4 rounded">
        <h2 className="mb-4 text-3xl">Register</h2>
        <FormA />
      </div>
    </div>
  );
}

export default Home;
