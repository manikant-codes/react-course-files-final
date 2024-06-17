import { isVisible } from "@testing-library/user-event/dist/utils";
import AnotherClassComponent from "./AnotherClassComponent";

const { Component } = require("react");

class MyFirstClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
      users: null,
      posts: null,
      isVisible: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { name: props.name };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  // console.log("this.state", this.state);
  // console.log("nextState", nextState);
  // if (this.state.count !== nextState.count) {
  //   return true;
  // }
  // return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.count >= 5) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot === true && this.state.posts === null) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          const json = res.json();
          return json;
        })
        .then((data) => {
          console.log("data", data);
          this.setState({ posts: data });
        })
        .catch(() => {});
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const json = res.json();
        return json;
      })
      .then((data) => {
        console.log("data", data);
        this.setState({ users: data });
      })
      .catch(() => {});
  }

  toggleVisible = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    console.log("users", this.state.users);
    return (
      <div>
        {this.state.isVisible && <AnotherClassComponent />}
        <button onClick={this.toggleVisible}>Show</button>
        {/* <h1>Hello {this.state.name}!</h1>
        <button onClick={this.decrement}>-</button>
        {this.state.count}
        <button onClick={this.increment}>+</button>
        {this.state.users && this.state.users[0]?.name} */}
      </div>
    );
  }
}

export default MyFirstClassComponent;
