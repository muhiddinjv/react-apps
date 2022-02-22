import React, {Component} from "react";

class Search extends Component {
  // Naming convention: name of ele that u assign callback to (on+ele+event) > onInputChange(e) { console.log(e.target.value) };
  state = { term: '' };

  
  onFormSubmit=(e)=>{//Use arrow func to avoid using it in render
    e.preventDefault(); 
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  }

  render() {
    console.log(this.state.term);
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
              value={this.state.term}
              onChange={e => this.setState({term: e.target.value})}
            />
            {/* Abbreviated syntax: onChange={e => console.log(e.target.value)} */}
            {/* Do NOT put on a set of parantheses whenever you pass a callback function to an event handler. If you do it will work every time the element renders without you clicking it. */}
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
