import { addContactReducer } from "./Reducers/addContactReducer";
import { addToFavouriteReducer } from "./Reducers/addToFavouriteReducer";
import { contactDetailsReducer } from "./Reducers/contactDetailsReducer";
import { contactListReducer } from "./Reducers/contactListReducer";
import { deleteContactReducer } from "./Reducers/deleteContactReducer";
import { editContactReducer } from "./Reducers/editContactReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");

const reducer = combineReducers({
  contactList: contactListReducer,
  addContact: addContactReducer,
  contactDetails: contactDetailsReducer,
  deleteContact: deleteContactReducer,
  addToFavourite: addToFavouriteReducer,
  editContact: editContactReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
