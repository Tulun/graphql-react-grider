import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  render() {
    if (this.props.data.loading) return <div>Loading...</div>;
    return (
      <ul className="collection">
        {this.props.data.songs.map(({ title, id }) => {
          return (
            <li key={id} className="collection-item">
              {title}
            </li>
          );
        })}
      </ul>
    );
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
