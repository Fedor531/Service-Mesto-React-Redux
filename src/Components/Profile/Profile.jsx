import React from 'react';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
      <div className={style.profile}>
        {props.isLoading ? <img src='https://i.gifer.com/90OK.gif' alt='Загрузка...' className={style.preloader}></img> : null}
        <div className={style.photo} style={{ backgroundImage: `url(${props.profile.avatar})` }}></div>
        <div className={style.info}>
          <h1 className={style.name}>{props.profile.name}</h1>
          <p className={style.job}>{props.profile.about}</p>
          <button className={style.edit}>Edit</button>
        </div>
      </div>
  );
}

export default Profile;
