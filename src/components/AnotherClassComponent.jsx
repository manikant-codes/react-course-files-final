import { Component } from "react";

class AnotherClassComponent extends Component {
  componentWillUnmount() {
    console.log("Unmounting");
  }
  render() {
    return <h1>Hello!</h1>;
  }
}

export default AnotherClassComponent;
