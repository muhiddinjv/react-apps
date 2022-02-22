import React, {Component} from "react";
import axios from "axios";
import Search from "./Search";
import Placeholder from "../A-compos/Placeholder";

class Pics extends Component {
  state = {result: ''};

  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: 'Client-ID _rKDnAdQlKexqAsytbYe6pr0MbSm5IHs5sMfX2_eABs'
      },
    });
  }

  render() {
    return (
      <div className="ui container">
        <Placeholder>
          <Search onSubmit={this.onSearchSubmit} />
          {/* you can write "cocaCola" instead of "onSubmit" but*/}
          {/* You cannot do the same on a JSX element e.g.<form> */}
        </Placeholder>
      </div>
    );
  }
}

export default Pics;

// Access key: _rKDnAdQlKexqAsytbYe6pr0MbSm5IHs5sMfX2_eABs
// Secret key: KPTm_69NjcR_acsnu7tURlGci5FzYfUS8MUXoubk4yo
// Redirect URI & Permissions: urn:ietf:wg:oauth:2.0:oob