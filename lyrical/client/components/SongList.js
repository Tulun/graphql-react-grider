import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

const SongList = ({ data }) => {
  if (data.loading) return <div>Loading...</div>;
  return (
    <div>
      <ul className="collection">
        {data.songs.map(({ title, id }) => {
          return (
            <li key={id} className="collection-item">
              {title}
            </li>
          );
        })}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
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
