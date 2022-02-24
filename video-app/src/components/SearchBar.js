import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {term: ''}

  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }

  onFormSubmit = e => {
    e.preventDefault();
    //TODO: make sure we call callback from parent component
    // AIzaSyD_3bNG8gRcqIFs9hUgxDHlpKivwe9xAS0 YOUTUBE API KEY
  }

  render() {
    return (
      <div className="search-bar ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="filed">
                  <label>Video Search</label>
                  <input type="text" 
                    onChange={this.onInputChange}
                    value={this.state.term} 
                  />
              </div>
          </form>
      </div>
    )
  }
}
