import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';
import { addCardTC, deleteCardTC, addLikeTC, deleteLikeTC } from '../../Redux/cardsReducer';
import { compose } from 'redux';
import CardForm from './NewCardForm/CardFormRedux';

class CardsContainer extends React.Component {

  render() {
    return <div>
      <CardForm addCardTC={this.props.addCardTC} />
      <Cards
        cards={this.props.cards}
        isLoading={this.props.isLoading}
        userId={this.props.userId}
        deleteCardTC={this.props.deleteCardTC}
        addLikeTC={this.props.addLikeTC}
        deleteLikeTC={this.props.deleteLikeTC} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardsPage.cards,
    isLoading: state.cardsPage.isLoading,
    userId: state.profilePage.profile._id
  }
}


export default compose(
  connect(mapStateToProps, { addCardTC, deleteCardTC, addLikeTC, deleteLikeTC })
)(CardsContainer)
