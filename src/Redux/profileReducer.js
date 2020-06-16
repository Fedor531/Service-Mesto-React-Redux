import { profileApi } from "../Components/Api/Api"

const SET_USER_INFO = 'SET-USER-INFO'
const IS_LOADING = 'IS-LOADING'
const UPDATE_PROFILE_INFO = 'UPDATE-PROFILE-INFO'

const initialState = {
  profile: {
    name: null,
    about: null,
    avatar: null,
    _id: null,
    cohort: null
  },

  isLoading: true
}

const cardsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_INFO:
      return {
        ...state, profile: { ...action.profile }
      }

    case IS_LOADING:
      return {
        ...state, isLoading: action.stateLoading
      }

    case UPDATE_PROFILE_INFO:
      return {
        ...state, profile: {...action.profile}
      }

    default: return state;
  }
}

/* export const addPostActionCreator = () => ({ type: ADD_CARD , name, link}) */

export const setUserInfo = (profile) => ({ type: SET_USER_INFO, profile })
export const isLoading = (stateLoading) => ({ type: IS_LOADING, stateLoading })
export const updateProfileInfo = (profile) => ({ type: UPDATE_PROFILE_INFO, profile })

export const getUserInfoTC = () => {
  return (dispatch) => {
    dispatch(isLoading(true))
    profileApi.getUserInfo()
      .then((res) => {
        dispatch(setUserInfo(res))
        dispatch(isLoading(false))
      })
  }
}

export const updateProfileInfoTC = (name, about) => {
  return (dispatch) => {
    profileApi.updatetUserInfo(name, about)
    .then(data => {
      dispatch(updateProfileInfo(data))
    })
  }
}


export default cardsReducer
