import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Placeholder from "../A-compos/Placeholder";

class Pics extends Component {
  state = { images: [] }; //if it holds array, default it to array
  // so that you won't get an error if you map it

  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID _rKDnAdQlKexqAsytbYe6pr0MbSm5IHs5sMfX2_eABs",
        },
      })
      this.setState({images: response.data.results})
  }

  render() {
    console.log(this.state.images);
    return (
      <div className="ui container">
        <Placeholder>
          <Search onSubmit={this.onSearchSubmit} />
          {/* you can write "cocaCola" instead of "onSubmit" but*/}
          {/* You cannot do the same on a JSX element e.g.<form> */}
          Found: {this.state.images.length} images
        </Placeholder>
      </div>
    );
  }
}

export default Pics;

// Access key: _rKDnAdQlKexqAsytbYe6pr0MbSm5IHs5sMfX2_eABs
// Secret key: KPTm_69NjcR_acsnu7tURlGci5FzYfUS8MUXoubk4yo
// Redirect URI & Permissions: urn:ietf:wg:oauth:2.0:oob
