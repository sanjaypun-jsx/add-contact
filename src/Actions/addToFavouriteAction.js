import axios from "axios";
import {
  ADD_TO_FAV_FAILED,
  ADD_TO_FAV_REQUEST,
  ADD_TO_FAV_SUCCESS
} from "../Constants/addToFavouriteConstants";

export const addToFavouriteAction = (id, Favourite) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TO_FAV_REQUEST
    });
    const { data } = await axios.patch(`http://localhost:8080/contacts/${id}`, {
      Favourite
    });
    dispatch({
      type: ADD_TO_FAV_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_FAV_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
