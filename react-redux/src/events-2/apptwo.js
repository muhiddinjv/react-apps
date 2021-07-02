import React from "react";
import SearchBar from "./SearchBar";
import Placeholder from "../comps-0/Placeholder";

class AppTwo extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Placeholder>
          <SearchBar />
        </Placeholder>
      </div>
    );
  }
}

export default AppTwo;
