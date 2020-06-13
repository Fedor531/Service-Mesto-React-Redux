import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';
import { getCardsThunkCreator } from '../../Redux/cardsReducer';
import { compose } from 'redux';

class CardsContainer extends React.Component {

  componentDidMount() {
    this.props.getCardsThunkCreator()
  }

  render() {
    return <div>
      <Cards cards={this.props.cards} isLoading={this.props.isLoading} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardsPage.cards,
    isLoading: state.cardsPage.isLoading
  }
}

export default compose(
  connect(mapStateToProps, { getCardsThunkCreator })
)(CardsContainer)
