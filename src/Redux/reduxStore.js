import { createStore, combineReducers, applyMiddleware} from "redux";
import cardsReducer from "./cardsReducer";
import profileReducer from "./profileReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

const redusers = combineReducers({
  cardsPage: cardsReducer,
  profilePage: profileReducer,
  app: appReducer,
  form: formReducer
})

const store  = createStore(redusers, applyMiddleware(thunkMiddleware)); //создаем store

window.store = store


export default store
