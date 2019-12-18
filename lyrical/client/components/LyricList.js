import React, { Component } from "react";

class LyricList extends Component {
  onLike(id) {
    console.log(id);
  }

  render() {
    if (!this.props.lyrics.length) return <div></div>;
    return (
      <ul className="collection">
        {this.props.lyrics.map(({ content, id }, index) => (
          <li className="collection-item" key={index}>
            {content}
            <i className="material-icons" onClick={() => this.onLike(id)}>
              thumb_up
            </i>
          </li>
        ))}
      </ul>
    );
  }
}

export default LyricList;
