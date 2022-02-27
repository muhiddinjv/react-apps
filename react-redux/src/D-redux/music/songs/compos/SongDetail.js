import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    const showSong = () => {
      const { song } = this.props;
      if (!song) {
        return <div>Select a song!</div>;
      } else {
        return (
          <div>
            <h3>Details for:</h3>
            <p>Title: {song.title}<br/>Duration: {song.duration}</p>
          </div>
        );
      }
    };
    return <div>{showSong()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
