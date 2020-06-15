import React from 'react';
import style from './Profile.module.css';

class Profile extends React.Component {

  state = {
    editMode: false,
    name: '',
    about: '',
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

  componentDidUpdate(prevProps, prevState) { // проверяем обновления на статус
    if (prevProps.profile.name !== this.props.profile.name && prevProps.profile.about !== this.props.profile.about) {
      this.setState({
        name: this.props.profile.name,
        about: this.props.profile.about
      })
    }
  }

  render() {
    return (
      <div className={style.profile}>
        {this.props.isLoading
          ? <img src='https://i.gifer.com/90OK.gif' alt='Загрузка...' className={style.preloader}></img>
          : <div className={style.profileContainer}>
            <div className={style.photo} style={{ backgroundImage: `url(${this.props.profile.avatar})` }}></div>
            <div className={style.info}>
              {this.state.editMode ? <input className={style.input} onChange={this.onNameChange} value={this.state.name} type="text" /> : <p className={style.name}>{this.props.profile.name}</p>}
              {this.state.editMode ? <input className={style.input} onChange={this.onAboutChange} value={this.state.about} type="text" /> : <p className={style.job}>{this.props.profile.about}</p>}
              {this.state.editMode ? <div>
                <button onClick={this.saveChanged} className={style.button}>Save</button>
                <button onClick={this.deActivateEditMode} className={style.button}>Cancel</button>
              </div>
                : <button onClick={this.activateEditMode} className={style.button}>Edit</button>}
            </div>
          </div>}
      </div>
    )
  }
}


export default Profile;
