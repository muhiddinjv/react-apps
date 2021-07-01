import React from "react";
import Placeholder from "./Placeholder";
import Appone from "../lifecycle-1/Appone";

class Document extends React.Component {
  changeLocation(){
    alert('location was supposed to be changed but it didnt!')
  }
  render(){
    return (
      <div>
        <Placeholder>
          <div className="ui icon header">
            <i className="pd file outline icon"></i>
            <Appone />
          </div>
          <div className="ui primary button" onClick={this.changeLocation}>Add Document</div>
        </Placeholder>
        <Placeholder>
          <h4 className="ui header">Application Lifecycle - Document Component</h4>
          <ol>
            <li>JS file loaded by browser</li>
            <li>Instance of App component is created</li>
            <li>App component 'constructor' function gets called</li>
            <li>
              State object is created and assigned to the 'this.state' property
            </li>
            <li>We call geolocation service</li>
            <li>React calls the components render method</li>
            <li>App returns JSX, gets rendered to page as HTML</li>
            <li>... wait ...</li>
            <li>We get result of geolocation!</li>
            <li>We update our state object with a call 'this.setState'</li>
            <li>React sees that we updated the state of a component</li>
            <li>React calls our 'render' method a second time</li>
            <li>Render method returns some (uploaded) JSX</li>
            <li>React takes that JSX and updates content onscreen</li>
          </ol>
        </Placeholder>
      </div>
    );
  }
};

export default Document;