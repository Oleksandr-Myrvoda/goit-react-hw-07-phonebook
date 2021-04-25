import React, { Component } from "react";

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: 15,
//   },
// };

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.setState;
    return (
      <div>
        <h1>Register page</h1>

        <form onSubmit={this.handleSubmit} autocomplete="off">
          <label>
            Name
            <input type="name" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}
export default Register;
