import { addContactReducer } from "./Reducers/addContactReducer";
import { contactListReducer } from "./Reducers/contactListReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");

const reducer = combineReducers({
  contactList: contactListReducer,
  addContact: addContactReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
