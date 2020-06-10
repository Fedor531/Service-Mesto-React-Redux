import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';
import { getCardsThunkCreator } from '../../Redux/cardsReducer';

class CardsContainer extends React.Component {

  componentDidMount() {
    this.props.getCardsThunkCreator()
  }

  render() {
    return <Cards cards={this.props.cards} />
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardsPage.cards
  }
}
export default connect(mapStateToProps, {getCardsThunkCreator})(CardsContainer)
