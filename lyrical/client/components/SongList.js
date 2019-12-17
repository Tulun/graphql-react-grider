import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";
import mutation from "../mutations/deleteSong";

const SongList = ({ data, mutate }) => {
  if (data.loading) return <div>Loading...</div>;
  return (
    <div>
      <ul className="collection">
        {data.songs.map(({ title, id }) => {
          return (
            <li key={id} className="collection-item">
              <Link to={`/songs/${id}`}>{title}</Link>
              <i
                onClick={() => {
                  mutate({
                    variables: {
                      id
                    }
                  }).then(() => data.refetch());
                }}
                className="material-icons"
              >
                delete
              </i>
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

export default graphql(mutation)(graphql(query)(SongList));
