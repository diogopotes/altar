import { ActionTypes } from '../constants/charactersConstants';

export const randomCharactersReducer = (
  state = { characters: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.RANDOM_CHARACTERS_REQUEST:
      return { ...state, loading: true };

    case ActionTypes.RANDOM_CHARACTERS_SUCCESS:
      return { loading: false, bottles: payload };

    case ActionTypes.RANDOM_CHARACTERS_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

// export const bottleReducer = (state = { bottle: {} }, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.BOTTLES_ADD_REQUEST:
//     case ActionTypes.BOTTLE_SINGLE_REQUEST:
//     case ActionTypes.BOTTLES_EDIT_REQUEST:
//     case ActionTypes.BOTTLES_DELETE_REQUEST:
//       return { ...state, loading: true };

//     case ActionTypes.BOTTLES_ADD_SUCCESS:
//     case ActionTypes.BOTTLE_SINGLE_SUCCESS:
//     case ActionTypes.BOTTLES_EDIT_SUCCESS:
//     case ActionTypes.BOTTLES_DELETE_SUCCESS:
//       return { loading: false, bottle: payload };

//     case ActionTypes.BOTTLES_ADD_FAIL:
//     case ActionTypes.BOTTLE_SINGLE_FAIL:
//     case ActionTypes.BOTTLES_EDIT_FAIL:
//     case ActionTypes.BOTTLES_DELETE_FAIL:
//       return { loading: false, error: payload };

//     default:
//       return state;
//   }
// };
