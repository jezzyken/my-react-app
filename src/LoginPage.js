import React from "react";

class Loginpage extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  getUsername = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (username !== "ken" && password !== "password") {
      alert("Incorrect Username");
    } else {
      this.props.history.push(`/welcomePage/${this.state.username}`);
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="form-group">
          <div className="form-control">
            <input
              type="text"
              placeholder="Username"
              onChange={(event) =>
                this.setState({ username: event.target.value })
              }
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </div>
          <div className="form-control">
            <button onClick={this.getUsername}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginpage;
