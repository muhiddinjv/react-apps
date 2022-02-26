import React, { Component } from "react";
import ImgList from "./ImgList";

class ImgApp extends Component {
  render() {
    return (
      <div className="ui container">
          <ImgList images={this.props.images} />
      </div>
    );
  }
}

export default ImgApp;
