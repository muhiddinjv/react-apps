import React, { Component } from 'react'
import { fetchUser } from '../../redux/actions';
import { connect } from 'react-redux';

class UserHeader extends Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const {user} = this.props;

    if (!user){return <i>Loading...</i>};

    return (
      <div className='header'>{user.name}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
  }
  
  export default connect(mapStateToProps, { fetchUser })(UserHeader);
