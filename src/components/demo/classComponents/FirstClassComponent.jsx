import React, { Component } from "react";
import FirstFunctionComponent from "../functionComponents/FirstFunctionComponent";

class FirstClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Manikant", color: "", users: null, posts: null };
  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.color };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ users: data });
      });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  // if (this.props.color === nextProps.color) {
  //   return false;
  // } else {
  //   return true;
  // }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState.posts;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    if (snapshot === null) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setState({ posts: data });
        });
    }
  }

  changeName = () => {
    console.log("this", this);
    this.setState({ name: "Deep Balar" });
  };

  render() {
    console.log("users", this.state.users);
    return (
      <div>
        <p>Hello, {this.state.name}</p>
        <p>Color, {this.state.color}</p>
        <button onClick={this.changeName}>Change Msg</button>
        <FirstFunctionComponent />
        {this.state.posts?.map((value) => {
          return <p>{value.title}</p>;
        })}
      </div>
    );
  }
}

export default FirstClassComponent;
