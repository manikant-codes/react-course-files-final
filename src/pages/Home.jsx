import React from "react";
import FormA from "../components/FormA";
import FormB from "../components/FormB";

function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="max-w-[550px] w-full bg-purple-300 p-4 rounded">
        <h2 className="mb-4 text-3xl">Guests</h2>
        {/* <FormA /> */}
        <FormB />
      </div>
    </div>
  );
}

export default Home;
