import { ActionTypes } from '../constants/charactersConstants';

export const randomCharactersReducer = (
  state = { characters: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.RANDOM_CHARACTERS_REQUEST:
      return { ...state, loading: true };

    case ActionTypes.RANDOM_CHARACTERS_SUCCESS:
      return { loading: false, characters: payload };

    case ActionTypes.RANDOM_CHARACTERS_FAIL:
      return { loading: false, error: payload };

    case ActionTypes.CHARACTERS_EDIT_SUCCESS:
      return {loading: false, characters: payload}

    default:
      return state;
  }
};

export const codeReducer = (
  state = { code: null },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GET_CODE_REQUEST:
      return { ...state, loading: true };

    case ActionTypes.GET_CODE_SUCCESS:
      return { loading: false, code: payload };

    case ActionTypes.GET_CODE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
