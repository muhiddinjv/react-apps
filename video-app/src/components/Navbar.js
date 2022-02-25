import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="ui pointing menu">
          <NavLink className="item" to="/">
            images
          </NavLink>

          <a class="item">Messages</a>
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Search..." />
                <i aria-hidden="true" class="search icon"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
