import { ActionTypes } from '../constants/charactersConstants';
import axios from 'axios';

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

// export const getSingleBottle = (bottleId) => async (dispatch) => {
//   try {
//     dispatch({ type: ActionTypes.BOTTLE_SINGLE_REQUEST });

//     const { data } = await axios.get(
//       `http://localhost:3000/bottles/${bottleId}`
//     );

//     dispatch({
//       type: ActionTypes.BOTTLE_SINGLE_SUCCESS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionTypes.BOTTLE_SINGLE_FAIL,
//       payload: err.message,
//     });
//     console.log(err.message);
//   }
// };

// export const addBottle = (btl) => async (dispatch) => {
//   try {
//     dispatch({ type: ActionTypes.BOTTLES_ADD_REQUEST });

//     let bottle = btl;

//     const unique_id = uuid();

//     bottle['id'] = unique_id;

//     const { data } = await axios.post('http://localhost:3000/bottles', bottle);

//     dispatch({
//       type: ActionTypes.BOTTLES_ADD_SUCCESS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionTypes.BOTTLES_ADD_FAIL,
//       payload: err.message,
//     });
//     console.log(err.message);
//   }
// };

// export const editBottle = (bottleId, bottle) => async (dispatch) => {
//   try {
//     dispatch({ type: ActionTypes.BOTTLES_EDIT_REQUEST });

//     const { data } = await axios.put(
//       `http://localhost:3000/bottles/${bottleId}`,
//       bottle
//     );

//     dispatch({
//       type: ActionTypes.BOTTLES_EDIT_SUCCESS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionTypes.BOTTLES_EDIT_FAIL,
//       payload: err.message,
//     });
//     console.log(err.message);
//   }
// };

// export const deleteBottle = (bottleId) => async (dispatch) => {
//   try {
//     dispatch({ type: ActionTypes.BOTTLES_DELETE_REQUEST });

//     const { data } = await axios.delete(
//       `http://localhost:3000/bottles/${bottleId}`
//     );

//     dispatch({
//       type: ActionTypes.BOTTLES_DELETE_SUCCESS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionTypes.BOTTLES_DELETE_FAIL,
//       payload: err.message,
//     });
//     console.log(err.message);
//   }
// };
