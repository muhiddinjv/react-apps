import React, {Component} from "react";
import Placeholder from "./Placeholder";
import AGeoLocation from "../Projects/B-season/AGeoLocation";

class Document extends Component {
  changeLocation(){
    alert('location was supposed to be changed but it didnt!')
  }
  render(){
    return (
      <div>
        <Placeholder>
          <div className="ui icon header">
            <i className="pd file outline icon" />
            <AGeoLocation />
          </div>
          <div className="ui primary button" onClick={this.changeLocation}>Add Document</div>
        </Placeholder>
      </div>
    );
  }
};

export default Document;
