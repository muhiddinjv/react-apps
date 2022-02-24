import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
          <form action="submit" className="ui">
              <div className="filed">
                  <label>Video Search</label>
                  <input type="text" name="text" id="text" />
              </div>
          </form>
      </div>
    )
  }
}
