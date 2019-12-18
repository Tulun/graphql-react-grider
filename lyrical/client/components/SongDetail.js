import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = ({ data }) => {
  const { song } = data;
  if (!song) return <div></div>;
  console.log(song);
  return (
    <div>
      <Link to="/">Back to List</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={song.id} />
    </div>
  );
};

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
