import React from 'react';
import style from './Cards.module.css';
import Card from './Card/Card';
import Preloader from '../Preloader/Preloader';


const Cards = (props) => {
  const cardElement = props.cards.map(c => <Card card={c}
    userId={props.userId}
    deleteCardTC={props.deleteCardTC}
    deleteLikeTC={props.deleteLikeTC}
    addLikeTC={props.addLikeTC} />)

  return (
    <div>
      <div className={style.cardsContainer}>
        {/* {props.isLoading ? <Preloader /> : null} */}
        {cardElement}
      </div>
    </div >
  )

}


export default Cards;
