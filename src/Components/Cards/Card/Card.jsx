import React from 'react';
import style from './Card.module.css';
import PopupImage from '../../PopupImage/PopupImage';

class Card extends React.Component {

  state = {
    isLike: false,
    popupIsOpen: false
  }

  componentDidMount() {
    this.props.card.likes.forEach((item) => {
      if (item._id === this.props.userId) {
        this.setState({
          isLike: true
        })
      }
    })
  }

  openPopupImage = (e) => {
    this.setState({
      popupIsOpen: true
    })
  }

  closePopupImage = (e) => {
    this.setState({
      popupIsOpen: false
    })
  }

  deleteCard = (e) => {
    e.stopPropagation()
    if (window.confirm('Вы действительно хотите удалить карточку?')) {
      this.props.deleteCardTC(this.props.card._id)
    }
  }

  addLike = (id) => {
    this.props.addLikeTC(id)
      .then(() => {
        this.setState({
          isLike: true
        })
      })
  }

  deleteLike = (id) => {
    this.props.deleteLikeTC(id)
      .then(() => {
        this.setState({
          isLike: false
        })
      })
  }

  render() {
    return (
      <div className={style.card}>
        <div onClick={this.openPopupImage} className={style.image} style={{ backgroundImage: `url(${this.props.card.link})` }}>
          {this.props.userId === this.props.card.owner._id ? <button onClick={this.deleteCard} className={style.deleteIcon}></button> : undefined}
        </div>
        <div className={style.description}>
          <h3 className={style.name}>{this.props.card.name}</h3>
          <div className={style.likeContainer}>
            {this.state.isLike
              ? <button onClick={() => this.deleteLike(this.props.card._id)} className={style.likeIcon + ' ' + style.isLiked}></button>
              : <button onClick={() => this.addLike(this.props.card._id)} className={style.likeIcon}></button>}
            <p className={style.likeCount}>{this.props.card.likes.length}</p>
          </div>
        </div>
        {this.state.popupIsOpen ? <PopupImage closePopupImage={this.closePopupImage} link={this.props.card.link} /> : undefined}
      </div>
    );
  }
}

export default Card;
