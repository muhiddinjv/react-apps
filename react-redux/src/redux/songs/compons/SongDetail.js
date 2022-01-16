import React, { Component } from "react";
import { connect } from "react-redux";
// import { selectedSong } from '../reducers';

class SongDetail extends Component {
  render() {
    const showSong = () => {
      const { song } = this.props;
      if (!song) {
        return <div>Select a song!</div>;
      } else {
        return (
          <ul>
            <li>{song.title}</li>
            <li>{song.duration}</li>
          </ul>
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
