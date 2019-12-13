import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data }) => {
  if (data.loading) return <div>Loading...</div>;
  return (
    <ul className="collection">
      {data.songs.map(({ title, id }) => {
        return (
          <li key={id} className="collection-item">
            {title}
          </li>
        );
      })}
    </ul>
  );
};

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
