import React from "react";

class Loginpage extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "ken",
      password: "password",
    };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  getUsername = (event) => {
    const { username, password } = this.state;

    event.preventDefault();
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
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-control">
            <input type="password" placeholder="Password" />
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
