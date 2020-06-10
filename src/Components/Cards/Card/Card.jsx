import React from 'react';
import style from './Card.module.css';

const Card = (props) => {

  const hey = () => {
    alert('hey')
  }

  return (
    <div id={props.id} key={props.id} className={style.card}>
      <div onClick={hey} className={style.image} style={{ backgroundImage: `url(${props.link})` }}>
        <button className={style.deleteIcon}></button>
      </div>
      <div className={style.description}>
        <h3 className={style.name}>{props.name}</h3>
        <div className={style.likeContainer}>
          <button className={style.likeIcon}></button>
          <p className={style.likeCount}>{}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
