import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import dataLoadRedux from '../../assets/dataLoadRedux.jpg';
import rulesOfReducers from '../../assets/rulesOfReducers.jpg';
import dontMutateState from '../../assets/dontMutateState.jpg';
import uCanMutateState from '../../assets/uCanMutateState.jpg';
import howToUpdateState from '../../assets/howToUpdateState.jpg';

class PostList extends Component {
  componentDidMount(){
      this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
          <h1>Post List</h1>
          <img style={{width:'500px'}} src={dataLoadRedux} alt="redux-data-load"/>
          <div style={{display:'flex', flexWrap:'wrap', width:'600px'}}>
            <img src={rulesOfReducers} style={{width:'300px'}} alt="rules-of-reducers"/>
            <img src={dontMutateState} style={{width:'300px'}} alt="dont-mutate-state"/> 
            <img src={uCanMutateState} style={{width:'300px'}} alt="can-mutate-state"/>
            <img src={howToUpdateState} style={{width:'300px'}} alt="how2-mutate-state"/>
          </div>    
          <div className="ui relaxed divided list">
            {this.renderList()}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
