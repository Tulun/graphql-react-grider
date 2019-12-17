import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";

const SongDetail = props => {
  console.log(props);
  return (
    <div>
      <h3>SongDetail</h3>
    </div>
  );
};

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
