import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <button className={style.deleteIcon}></button>
      </div>
      <div className={style.description}>
        <h3 className={style.name}>{props.name}</h3>
        <div className={style.likeContainer}>
          <button className={style.likeIcon}></button>
          <p className={style.likeCount}>0</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
