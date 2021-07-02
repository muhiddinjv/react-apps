import React from "react";

class SearchBar extends React.Component {
  // Naming convention: name of ele that u assign callback to (on+ele+event) > onInputChange(e) { console.log(e.target.value) };
  state = { term: "" };

  onFormSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="label" htmlFor="search">
              <h3>Search For Images</h3>
            </label>
            <input
              id="search"
              type="text"
              placeholder="type name here"
              value={this.state.value}
              onChange={e => this.setState({term: e.target.event})}
            />
            {/* Abbreviated syntax: onChange={e => console.log(e.target.value)} */}
            {/* Do NOT put on a set of parantheses whenever you pass a callback function to an event handler. If you do it will work every time the element render without you clicking it. */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
