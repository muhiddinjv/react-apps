import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { term, onImageTermSubmit, onVideoTermSubmit } = this.props;

    if (term === 'images'){
      onImageTermSubmit(this.state.term);
    } else {
      onVideoTermSubmit(this.state.term)
    }
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.onFormSubmit} className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <i aria-hidden="true" className="search icon"></i>
        </form>
      </div>
    )
  }
}
