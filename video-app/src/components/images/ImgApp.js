import React, { Component } from "react";
// import unsplash from "../../Api/unsplash";
// import ImgSearch from "./ImgSearch";
import ImgList from "./ImgList";

class ImgApp extends Component {
  // state = { images: [] };

  // onSearchSubmit = async (term) => {
  //   const response = await unsplash
  //     .get("/search/photos", { params: { query: term } })
  //     this.setState({images: response.data.results})
  // }

  render() {
    return (
      <div className="ui container">
          {/* <ImgSearch onSubmit={this.onSearchSubmit} /> */}
          <ImgList images={this.props.images} />
      </div>
    );
  }
}

export default ImgApp;

// Access key: _rKDnAdQlKexqAsytbYe6pr0MbSm5IHs5sMfX2_eABs
// Secret key: KPTm_69NjcR_acsnu7tURlGci5FzYfUS8MUXoubk4yo
// Redirect URI & Permissions: urn:ietf:wg:oauth:2.0:oob
