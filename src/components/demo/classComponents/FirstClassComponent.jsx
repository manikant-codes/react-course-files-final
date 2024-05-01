import React, { Component } from "react";

class FirstClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Manikant" };
  }

  changeName = () => {
    console.log("this", this);
    this.setState({ name: "Deep Balar" });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}</p>
        <p>Color, {this.props.color}</p>
        <button onClick={this.changeName}>Change Msg</button>
      </div>
    );
  }
}

export default FirstClassComponent;
