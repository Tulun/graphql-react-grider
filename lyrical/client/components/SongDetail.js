import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link } from "react-router";

const SongDetail = ({ data }) => {
  const { song } = data;
  if (!song) return <div></div>;
  return (
    <div>
      <Link to="/">Back to List</Link>
      <h3>{song.title}</h3>
    </div>
  );
};

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
