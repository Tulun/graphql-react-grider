import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  render() {
    if (this.props.data.loading) return <div>Loading...</div>;
    return (
      <ul>
        {this.props.data.songs.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
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
