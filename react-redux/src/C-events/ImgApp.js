import React, { Component } from "react";
import unsplash from "../api/unsplash";
import Search from "./Search";
import ImgList from "./ImgList";
import Placeholder from "../A-compos/Placeholder";

class ImgApp extends Component {
  state = { images: [] }; //if it holds array, default it to array
  // so that you won't get an error if you map it

  onSearchSubmit = async (term) => {
    const response = await unsplash
      .get("/search/photos", { params: { query: term } })
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
          <ImgList images={this.state.images} />
        </Placeholder>
      </div>
    );
  }
}

export default ImgApp;

// Access key: _rKDnAdQlKexqAsytbYe6pr0MbSm5IHs5sMfX2_eABs
// Secret key: KPTm_69NjcR_acsnu7tURlGci5FzYfUS8MUXoubk4yo
// Redirect URI & Permissions: urn:ietf:wg:oauth:2.0:oob
