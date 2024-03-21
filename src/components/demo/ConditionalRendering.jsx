import React from "react";

// function ConditionalRendering(props) {
//   if (props.isLoggedIn) {
//     return <h1>Welcome!</h1>;
//   }
//   return <h1>Please login!</h1>;
// }

// function ConditionalRendering(props) {
//   return <>{props.isLoggedIn ? <h1>Welcome!</h1> : <h1>Please login!</h1>}</>;
// }

// function ConditionalRendering(props) {
//   return <>{props.isLoggedIn ? <h1>Welcome!</h1> : null}</>;
// }

function ConditionalRendering(props) {
  return <>{props.isLoggedIn && <h1>Welcome!</h1>}</>;
}

export default ConditionalRendering;
