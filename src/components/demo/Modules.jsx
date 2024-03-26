import React from "react";

// Named export
// export const num = 10;
// export const name = "ASD";
// export function add() {}

const num = 10;
const name = "ASD";
function add() {}

function Modules() {
  return <div>Modules</div>;
}

// Named export
export { num, name, add };

// Default export
export default Modules;
