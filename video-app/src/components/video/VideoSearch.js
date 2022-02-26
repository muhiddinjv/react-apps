import React, { Component } from 'react'

export default class VideoSearch extends Component {
  state = {term: ''}

  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }

  onFormSubmit = e => {
    e.preventDefault();
    //TODO: make sure we call callback from parent component
    this.props.onTermSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar item">
          <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="ui icon input">
                  {/* <label>Video Search</label> */}
                  <input type="text" 
                    onChange={this.onInputChange}
                    value={this.state.term} 
                    placeholder="Search..." 
                  />
                  <i aria-hidden="true" class="search icon"></i>

              </div>
          </form>
      </div>
    )
  }
}
