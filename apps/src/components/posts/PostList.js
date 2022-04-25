import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import reduxDataLoad from '../../assets/dataLoadRedux.jpg';

class PostList extends Component {
  componentDidMount(){
      this.props.fetchPosts();
  }
  render() {
    return (
      <div>
          <h1>Post List</h1>
          <img style={{width:'500px'}} src={reduxDataLoad} alt="redux-data-load"/>
      </div>
    )
  }
}

export default connect(null, {fetchPosts})(PostList);
