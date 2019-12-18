import React, { Component } from "react";

class LyricList extends Component {
  render() {
    if (!this.props.lyrics.length) return <div></div>;
    return (
      <ul className="collection">
        {this.props.lyrics.map(({ content }, id) => (
          <li className="collection-item" key={id}>
            {content}
          </li>
        ))}
      </ul>
    );
  }
}

export default LyricList;
