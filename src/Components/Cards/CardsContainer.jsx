import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';
import { getCardsThunkCreator, addCardTC } from '../../Redux/cardsReducer';
import { compose } from 'redux';
import CardForm from './NewCardForm/CardFormRedux';

class CardsContainer extends React.Component {

  componentDidMount() {
    this.props.getCardsThunkCreator()
  }

  render() {
    return <div>
      <CardForm addCardTC={this.props.addCardTC}/>
      <Cards cards={this.props.cards} isLoading={this.props.isLoading} userId={this.props.userId}  />
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
  connect(mapStateToProps, { getCardsThunkCreator, addCardTC })
)(CardsContainer)
