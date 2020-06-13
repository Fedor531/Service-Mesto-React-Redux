import { createStore, combineReducers, applyMiddleware} from "redux";
import cardsReducer from "./cardsReducer";
import profileReducer from "./profileReducer";
import thunkMiddleware from "redux-thunk";

const redusers = combineReducers({
  cardsPage: cardsReducer,
  profilePage: profileReducer
})

const store  = createStore(redusers, applyMiddleware(thunkMiddleware)); //создаем store

window.store = store


export default store
