import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    job: "",
  };

  handleSubmit = (e) => {
    if (this.state.name !== "" && this.state.job !== "") {
      this.props.updateNames(this.state);

      this.setState({ name: "", job: "" });
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="input1"
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) =>
              this.setState({ name: e.target.value.toUpperCase() })
            }
          />
          <label htmlFor="job">Job</label>
          <input
            className="input1"
            type="text"
            name="job"
            id="job"
            value={this.state.job}
            onChange={(e) =>
              this.setState({ job: e.target.value.toUpperCase() })
            }
          />
          <button className="button1" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
