import { Component } from "react";

class FirstClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "Hello", color: "", users: null };
  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.color };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  handleChangeMsg = () => {
    this.setState({ msg: "Good Evening" });
  };

  render() {
    return (
      <>
        <h1>{this.state.msg}</h1>
        <p>Today's color is {this.state.color}</p>
        <p>From Class Component</p>
        <h2>Users</h2>
        <ul>
          {this.state.users?.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
        <button onClick={this.handleChangeMsg}>Change Msg</button>
      </>
    );
  }
}

export default FirstClassComponent;
