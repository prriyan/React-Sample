import React, { Component } from "react";
import { Button } from "@material-ui/core";
class TStates extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    this.state = { name: "priyan", age: "24", email: "priyan@gmail.com" };
  }
  changeName() {
    this.setState({ name: "shan", age: "25", email: "shan@gmail.com" });
  }
  render() {
    return (
      <div>
        <h3> Haai {this.state.name}</h3>
        <h3> Age {this.state.age}</h3>
        <h3> E-Mail {this.state.email}</h3>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={this.changeName}
        >
          change
        </Button>
      </div>
    );
  }
}
export default TStates;
