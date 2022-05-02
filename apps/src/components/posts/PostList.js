import React, { Component } from 'react';
import UserHeader from './UserHeader';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../../redux/actions';
import dataLoadRedux from '../../assets/dataLoadRedux.jpg';
import rulesOfReducers from '../../assets/rulesOfReducers.jpg';
import dontMutateState from '../../assets/dontMutateState.jpg';
import uCanMutateState from '../../assets/uCanMutateState.jpg';
import howToUpdateState from '../../assets/howToUpdateState.jpg';
import fetchPost from '../../assets/fetchPosts.jpg';

const images = [dataLoadRedux, rulesOfReducers, uCanMutateState, dontMutateState, howToUpdateState, fetchPost]

class PostList extends Component {
  state = {showImages: false, showList: false,};

  componentDidMount(){
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id} style={{display: this.state.showList ? 'block' : 'none'}}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>)
    })
  }
  showList = () => {
    !this.state.showList ? this.setState({showList: true}) : this.setState({showList: false});
  }

  showImages = () => {
    !this.state.showImages ? this.setState({showImages: true}) : this.setState({showImages: false});
  }
  render() {
    return (
      <div>
          <h1>Post List</h1>
          <div className="list">
            <button onClick={this.showImages}>{ this.state.showImages ? 'hide' : 'show'} images</button>

            <div style={{display: this.state.showImages ? 'flex' : 'none', flexWrap:'wrap', gap:'20px'}}>
              {images.map((img, ind) => <img key={ind} src={img} style={{width:'300px', border:'1px solid #999', padding:'10px'}} alt="" srcset="" />)}
            </div>   
          </div>   
          <div className="ui relaxed divided list">
            <button onClick={this.showList}>{ this.state.showList ? 'hide' : 'show'} list</button>
            {this.renderList()}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
