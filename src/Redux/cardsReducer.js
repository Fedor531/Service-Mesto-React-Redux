import { cardsApi } from "../Components/Api/Api"

const SET_CARDS = 'SET-CARDS'
const IS_LOADING = 'IS-LOADING'
const ADD_NEW_CARD = 'ADD-NEW-CARD'
const DELETE_CARD = 'DELETE-CARD'
const ADD_LIKE = 'ADD-LIKE'
const DELETE_LIKE = 'DELETE-LIKE'

const initialState = {
  cards: [
    /* { _id: 1, name: 'Hello1', link: 'https://i.pinimg.com/originals/6a/6e/0f/6a6e0f09e8aa1972b4d63a0c9c57c226.jpg' } */
  ],
  isLoading: true
}

const cardsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_CARDS:
      return {
        ...state, cards: [...action.cards]
      }

    case IS_LOADING:
      return {
        ...state, isLoading: action.stateLoading
      }

    case ADD_NEW_CARD:
      debugger
      return {
        ...state, cards: [...state.cards, action.newCard]
      }

    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => {
          if (card._id !== action.id) {
            return card
          }
        })
      }

    case ADD_LIKE:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card._id === action.card._id) {
            card.likes.length = action.card.likes.length
            return card
          } return card
        })
      }

    case DELETE_LIKE:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card._id === action.card._id) {
            card.likes.length = action.card.likes.length
            return card
          } return card
        })
      }



    default: return state;
  }
}

export const setCards = (cards) => ({ type: SET_CARDS, cards })
export const isLoading = (stateLoading) => ({ type: IS_LOADING, stateLoading })
export const addNewCard = (newCard) => ({ type: ADD_NEW_CARD, newCard })
export const deleteCard = (id) => ({ type: DELETE_CARD, id })
export const addLike = (card) => ({ type: ADD_LIKE, card })
export const deleteLike = (card) => ({ type: DELETE_LIKE, card })


export const getCardsThunkCreator = () => {
  return (dispatch) => {
    dispatch(isLoading(true))
    return cardsApi.getCards()
      .then((data) => {
        dispatch(setCards(data))
        dispatch(isLoading(false))
      })
  }
}

export const addCardTC = (name, link) => {
  return (dispatch) => {
    cardsApi.addCard(name, link)
      .then((data) => {
        dispatch(addNewCard(data))
      })
  }
}

export const deleteCardTC = (id) => {
  return (dispatch) => {
    cardsApi.deleteCard(id)
      .then(() => {
        dispatch(deleteCard(id))
      })
  }
}

export const addLikeTC = (id) => {
  return (dispatch) => {
    return cardsApi.addLikeCard(id)
      .then(card => {
        dispatch(addLike(card))
      })
  }
}

export const deleteLikeTC = (id) => {
  return (dispatch) => {
    return cardsApi.deleteLikeCard(id)
      .then(card => {
        dispatch(deleteLike(card))
      })
  }
}

export default cardsReducer
