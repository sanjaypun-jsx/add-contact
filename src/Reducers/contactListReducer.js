import {
  FETCH_CONTACT_FAILED,
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS
} from "../Constants/contactListConstants";

export const contactListReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case FETCH_CONTACT_REQUEST:
      return {
        contacts: [],
        loading: true
      };
    case FETCH_CONTACT_SUCCESS:
      return {
        contacts: action.payload,
        loading: false
      };
    case FETCH_CONTACT_FAILED:
      return {
        contacts: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
