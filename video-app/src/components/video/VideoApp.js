import React, { Component } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class VidApp extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.props.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={this.props.onVideoSelect}
              videos={this.props.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
