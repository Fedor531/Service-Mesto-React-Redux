import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';
import { getCardsThunkCreator } from '../../Redux/cardsReducer';

class CardsContainer extends React.Component {

  componentDidMount() {
    this.props.getCardsThunkCreator()
  }

  render() {
    return <div>
      {this.props.isLoading ? <img src='https://i.gifer.com/90OK.gif'></img> : null}
      <Cards cards={this.props.cards} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardsPage.cards,
    isLoading: state.cardsPage.isLoading
  }
}
export default connect(mapStateToProps, { getCardsThunkCreator })(CardsContainer)
