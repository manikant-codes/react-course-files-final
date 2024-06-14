import AnotherClassComponent from "./AnotherClassComponent";

const { Component } = require("react");

class MyFirstClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: "", users: null };
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

  render() {
    console.log("users", this.state.users);
    return (
      <div>
        <AnotherClassComponent />
        <h1>Hello {this.state.name}!</h1>
        <button onClick={this.decrement}>-</button>
        {this.state.count}
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default MyFirstClassComponent;
