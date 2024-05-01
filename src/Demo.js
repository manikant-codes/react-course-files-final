import React, { Component } from "react";
import FirstClassComponent from "./components/demo/classComponents/FirstClassComponent";

class Demo extends Component {
  render() {
    return (
      <div>
        <FirstClassComponent color="Blue" />
        {/* new FirstClassComponent({color: "Blue"})  */}
      </div>
    );
  }
}

export default Demo;
