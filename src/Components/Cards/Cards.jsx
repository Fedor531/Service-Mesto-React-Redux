import React from 'react';
import style from './Cards.module.css';
import Card from './Card/Card';

const Cards = (props) => {
  const cardElement = props.cards.map(c => <Card name={c.name} link={c.link} likes={c.likes} id={c._id} />)
  return (
    <div className={style.cards}>
      {cardElement}
    </div>
  );
}

export default Cards;
