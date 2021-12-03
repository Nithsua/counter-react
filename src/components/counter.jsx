import React, { Component } from "react";

export default class Counter extends Component {
  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    console.log("props: ", this.props);

    return (
      <div>
        <span
          style={{
            fontWeight: "bold",
            fontSize: 15,
          }}
          className="badge bg-primary m-2"
        >
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount = () => {
    // console.log(this.props);
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}
