import React from "react";
import SearchBar from "./SearchBar";
import Placeholder from "../comps-0/Placeholder";

class AppTwo extends React.Component {
  onSearchSubmit(term){
    console.log(term)
  }

  render() {
    return (
      <div className="ui container">
        <Placeholder>
          <SearchBar onSubmit={this.onSearchSubmit} />
          {/* you can write "cocaCola" instead of "onSubmit" but*/}
          {/* You cant do the same on a JSX element e.g.<form> */}
        </Placeholder>
      </div>
    );
  }
}

export default AppTwo;
