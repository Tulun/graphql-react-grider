import React, { Component } from "react";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { lyric: "" };
  }
  render() {
    return (
      <form>
        <label>Add a lyric</label>
        <input
          value={this.state.lyric}
          onChange={event => this.setState({ lyric: event.target.value })}
        />
      </form>
    );
  }
}

export default LyricCreate;
