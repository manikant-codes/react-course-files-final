import { Component } from "react";
import FirstClassComponent from "./components/demo/classComponents/FirstClassComponent";
import FirstFunctionComponent from "./components/demo/functionComponents/FirstFunctionComponent";

class Demo extends Component {
  render() {
    return (
      <>
        <FirstClassComponent color="Blue" />
        {/* new FirstClassComponent({clolor: "Blue"}) */}
        <hr />
        <FirstFunctionComponent color="Red" />
        {/* FirstFunctionComponent({color: "Red"}) */}
      </>
    );
  }
}

export default Demo;
