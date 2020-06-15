import { cardsApi } from "../Components/Api/Api"

const SET_CARDS = 'SET-CARDS'
const IS_LOADING = 'IS-LOADING'
const ADD_NEW_CARD = 'ADD-NEW-CARD'
const DELETE_CARD = 'DELETE-CARD'

const initialState = {
  cards: [
    /* { _id: 1, name: 'Hello1', link: 'https://i.pinimg.com/originals/6a/6e/0f/6a6e0f09e8aa1972b4d63a0c9c57c226.jpg' } */
  ],
  isLoading: false
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
      return {
        ...state, cards: [...state.cards, action.newCard]
      }

    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card._id === action.id) {
            return console.log('удалили карточку') //распоковали user и поменяли followed false
          }
          return card
        })
      }

    default: return state;
  }
}

export const setCards = (cards) => ({ type: SET_CARDS, cards })
export const isLoading = (stateLoading) => ({ type: IS_LOADING, stateLoading })
export const addNewCard = (newCard) => ({ type: ADD_NEW_CARD, newCard })
export const deleteCard = (id) => ({ type: DELETE_CARD, id })


export const getCardsThunkCreator = () => {
  return (dispatch) => {
    dispatch(isLoading(true))
    cardsApi.getCards()
      .then((res) => {
        dispatch(setCards(res.data))
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


export default cardsReducer
