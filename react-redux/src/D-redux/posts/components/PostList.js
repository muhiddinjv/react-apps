import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import Placeholder from "../../../A-compos/Placeholder";



class PostList extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render() {
    return (
      <Placeholder>
        <div>
        PostList
      </div>
      </Placeholder>
    )
  }
}

// No mapStateToProps (always first argument) ? set it to null!
export default connect(null, { fetchPosts })(PostList)

