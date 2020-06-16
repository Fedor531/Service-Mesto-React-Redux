import React from 'react';
import style from './Profile.module.css';
import Preloader from '../Preloader/Preloader';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';

class Profile extends React.Component {

  state = {
    editMode: false,
    name: this.props.profile.name,
    about: this.props.profile.about,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  saveChanged = () => {
    this.setState({
      editMode: false
    })
    this.props.updateProfileInfoTC(this.state.name, this.state.about)
  }

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  onNameChange = (e) => {
    this.setState({
      name: e.currentTarget.value
    })
  }

  onAboutChange = (e) => {
    this.setState({
      about: e.currentTarget.value
    })
  }

  /*    componentDidUpdate(prevProps, prevState) {
       if (prevState.name !== this.props.profile.name && prevState.about !== this.props.profile.about) {
         this.setState({
           name: this.props.profile.name,
           about: this.props.profile.about
         })
       }
     } */

  render() {
    return (
      <div className={style.profile}>
        <div className={style.profileContainer}>
          <ProfileAvatar avatar={this.props.profile.avatar} updateProfileAvatarTC={this.props.updateProfileAvatarTC}/>
          <div className={style.info}>
            {this.state.editMode ? <input className={style.input} onChange={this.onNameChange} value={this.state.name} type="text" /> : <p className={style.name}>{this.props.profile.name}</p>}
            {this.state.editMode ? <input className={style.input} onChange={this.onAboutChange} value={this.state.about} type="text" /> : <p className={style.job}>{this.props.profile.about}</p>}
            {this.state.editMode ? <div>
              <button onClick={this.saveChanged} className={style.button}>Save</button>
              <button onClick={this.deActivateEditMode} className={style.button}>Cancel</button>
            </div>
              : <button onClick={this.activateEditMode} className={style.button}>Edit</button>}
          </div>
        </div>
      </div>
    )
  }
}


export default Profile;
