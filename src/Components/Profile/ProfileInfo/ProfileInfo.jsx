import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  return (
    <div className={style.info}>
      {this.state.editMode ? <input className={style.input} onChange={this.onNameChange} value={this.state.name} type="text" /> : <p className={style.name}>{this.props.profile.name}</p>}
      {this.state.editMode ? <input className={style.input} onChange={this.onAboutChange} value={this.state.about} type="text" /> : <p className={style.job}>{this.props.profile.about}</p>}
      {this.state.editMode ? <div>
        <button onClick={this.saveChanged} className={style.button}>Save</button>
        <button onClick={this.deActivateEditMode} className={style.button}>Cancel</button>
      </div>
        : <button onClick={this.activateEditMode} className={style.button}>Edit</button>}
    </div>
  )

}


export default ProfileInfo;
