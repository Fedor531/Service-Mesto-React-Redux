import { getCardsThunkCreator } from './cardsReducer';
import { getUserInfoTC } from './profileReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'


const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default: return state;
  }
}

export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializationAppTC = () => (dispatch) => {
  Promise.all([dispatch(getCardsThunkCreator()), dispatch(getUserInfoTC()) ])
    .then(() => {
      dispatch(setInitializedSuccess())
    })
}


export default appReducer
