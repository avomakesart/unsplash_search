import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  //   onInputChange(event) {
  //     return event.target.value;
  //   }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div>
        <div
          className="u-max-full-width"
          style={{
            margin: "3rem auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form onSubmit={this.onFormSubmit}>
            <label>Image Search</label>
            <input
              className="u-full-width"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Type a search..."
            />
          </form>
        </div>
      </div>
    );
  }
}
