import React from 'react';
import style from './Card.module.css';

const Card = (props) => {

  const hey = (e) => {
    alert('hey')
  }
console.log(props)
  const deleteCard = (e) => {
    e.stopPropagation()
    if(window.confirm('Вы действительно хотите удалить карточку?')){
      props.deleteCardTC(props.card._id)
    }
  }

  return (
    <div /* id={props.card._id} key={props.card._id} */ className={style.card}>
      <div onClick={hey} className={style.image} style={{ backgroundImage: `url(${props.card.link})` }}>
        {props.userId === props.card.owner._id ? <button onClick={deleteCard} className={style.deleteIcon}></button> : undefined}
      </div>
      <div className={style.description}>
        <h3 className={style.name}>{props.card.name}</h3>
        <div className={style.likeContainer}>
          <button className={ /* props.userId === props.card.owner._id *//*  ? */ style.likeIcon /* : style.likeIcon1 */}></button>
          <p className={style.likeCount}>{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

