import React from 'react';
import style from './Cards.module.css';
import Card from './Card/Card';
import Popup from "reactjs-popup";

const Cards = (props) => {

  const cardElement = props.cards.map(c => <Card card={c} />)

  return (
    <div>
      <Popup  trigger={<button className={style.button}>+</button>}>
        <div className={style.popup}>Hello</div>
      </Popup>
      <div className={style.cardsContainer}>
        {props.isLoading ? <img src='https://i.gifer.com/90OK.gif' alt='Загрузка...' className={style.preloader}></img> : null}
        {cardElement}
      </div>
    </div>
  );
}

export default Cards;
