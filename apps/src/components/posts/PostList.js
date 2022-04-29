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
    // for (const post of this.props.posts) {
    //   return <div>{post.title}</div>
    // }
    this.props.fetchPosts();
    this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <h1>hi</h1>
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
    console.log(this.props.posts);
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
          <div className="ui relaxed divided list" style={{border:'1px solid #999'}}>
            <p>hi</p>
            {this.renderList()}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);
