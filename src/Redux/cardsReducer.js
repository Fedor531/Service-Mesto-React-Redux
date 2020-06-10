import { getCards } from "../Components/Api/Api"

const ADD_CARD = 'ADD-CARD'
const SET_CARDS = 'SET-CARDS'

const initialState = {
  cards: [
    { _id: 1, name: 'Hello1', link: 'https://i.pinimg.com/originals/6a/6e/0f/6a6e0f09e8aa1972b4d63a0c9c57c226.jpg' }
  ]
}

const cardsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_CARDS:
    return {
      ...state, cards: [...action.cards]
    }

    case ADD_CARD:
      const newPost = {
        id: 4,
        message: state.newPostText
      }

      return {
        ...state,
        posts: [...state.posts, newPost],  //добавили новый элемент в конец массива
        newPostText: '',
      }

    default: return state;
  }
}

/* export const addPostActionCreator = () => ({ type: ADD_CARD , name, link}) */

export const setCards = (cards) => ({ type: SET_CARDS, cards }) // берем пользователей с сервака


export const getCardsThunkCreator = () => {
  return (dispatch) => {
     getCards()
       .then((res) => {
         dispatch(setCards(res.data))
       })
   }
 }


export default cardsReducer
