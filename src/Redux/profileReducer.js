import { Api } from "../Components/Api/Api"

const SET_USER_INFO = 'SET-USER-INFO'
const IS_LOADING = 'IS-LOADING'

const initialState = {
  profile: {

  },
  isLoading: false
}

const cardsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_INFO:
      return {
        ...state, profile: {...action.profile}
      }

    case IS_LOADING:
      return {
        ...state, isLoading: action.stateLoading
      }

    /*    case ADD_CARD:
         const newPost = {
           id: 4,
           message: state.newPostText
         }
         return {
           ...state,
           posts: [...state.posts, newPost],  //добавили новый элемент в конец массива
           newPostText: '',
         } */

    default: return state;
  }
}

/* export const addPostActionCreator = () => ({ type: ADD_CARD , name, link}) */

export const setUserInfo = (profile) => ({ type: SET_USER_INFO, profile })
export const isLoading = (stateLoading) => ({ type: IS_LOADING, stateLoading })

export const getUserInfoTC = () => {
  return (dispatch) => {
    dispatch(isLoading(true))
    Api.getUserInfo()
      .then((res) => {
        dispatch(setUserInfo(res))
        dispatch(isLoading(false))
      })
  }
}


export default cardsReducer
