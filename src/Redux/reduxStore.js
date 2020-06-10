import { createStore, combineReducers, applyMiddleware} from "redux";
import cardsReducer from "./cardsReducer";
import thunkMiddleware from "redux-thunk";

const redusers = combineReducers({
  cardsPage: cardsReducer
})

const store  = createStore(redusers,applyMiddleware(thunkMiddleware)); //создаем store


export default store
