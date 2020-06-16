import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { updateProfileInfoTC, updateProfileAvatarTC } from '../../Redux/profileReducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  render() {
    return <div>
      <Profile
      profile={this.props.profile}
      isLoading={this.props.isLoading}
      updateProfileInfoTC={this.props.updateProfileInfoTC}
      updateProfileAvatarTC={this.props.updateProfileAvatarTC}
       />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.cardsPage.isLoading
  }
}

export default compose(
  connect(mapStateToProps, { updateProfileInfoTC, updateProfileAvatarTC })
)(ProfileContainer)
