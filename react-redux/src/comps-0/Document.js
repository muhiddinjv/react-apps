import React from "react";
import Placeholder from "./Placeholder";
import Appone from "../Lifecycle-1/Appone";

class Document extends React.Component {
  changeLocation(){
    alert('location was supposed to be changed but it didnt!')
  }
  render(){
    return (
      <div>
        <Placeholder>
=          <div className="ui icon header">
            <i className="pd file outline icon"></i>
            <Appone />
          </div>
          <div className="ui primary button" onClick={this.changeLocation}>Add Document</div>
        </Placeholder>
      </div>
    );
  }
};

export default Document;
