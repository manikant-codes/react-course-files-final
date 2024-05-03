import React, { Component } from "react";
import FirstClassComponent from "./components/demo/classComponents/FirstClassComponent";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { showComponent: true };
  }

  toggleComponent = () => {
    this.setState({ showComponent: !this.state.showComponent });
  };

  render() {
    return (
      <div>
        {this.state.showComponent && (
          <FirstClassComponent
            color="Blue"
            toggleComponent={this.toggleComponent}
          />
        )}
        <button onClick={this.toggleComponent}>Remove Component</button>
        {/* new FirstClassComponent({color: "Blue"})  */}
      </div>
    );
  }
}

export default Demo;

https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-grid/c_limit,w_320/v1/catalogue/2024/upright-bba-with-shadow/m126234-0051 320w
