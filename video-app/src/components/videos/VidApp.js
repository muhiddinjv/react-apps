import React, { Component } from "react";
import VidList from "./VidList";
import VidDetail from "./VidDetail";

export default class VidApp extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VidDetail video={this.props.selectedVideo} />
          </div>
          <div className="five wide column">
            <VidList
              onVideoSelect={this.props.onVideoSelect}
              videos={this.props.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
