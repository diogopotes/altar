import { ActionTypes } from '../constants/charactersConstants';
import axios from 'axios';

import qs from 'qs';

export const getRandomCharacters = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.RANDOM_CHARACTERS_REQUEST });

    const { data } = await axios.get('/api/random-characters');

    dispatch({
      type: ActionTypes.RANDOM_CHARACTERS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.RANDOM_CHARACTERS_FAIL,
      payload: err.message,
    });
    console.log(err.message);
  }
};

export const getCode = (grid) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.GET_CODE_REQUEST });


    const { data } = await axios.get('/api/get-code', {params: {
      grid
    },
    	paramsSerializer: function(params) {

        return qs.stringify(params)

      }
  });

    dispatch({
      type: ActionTypes.GET_CODE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_CODE_FAIL,
      payload: err.message,
    });
    console.log(err.message);
  }
};

export const editGrid = (letter) => async (dispatch) => {

  try {
    dispatch({ type: ActionTypes.CHARACTERS_EDIT_REQUEST });

    const { data } = await axios.get('/api/edit-grid', {params: {
      letter
    }
  });

    dispatch({
      type: ActionTypes.CHARACTERS_EDIT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.CHARACTERS_EDIT_FAIL,
      payload: err.message,
    });
    console.log(err.message);
  }


}

