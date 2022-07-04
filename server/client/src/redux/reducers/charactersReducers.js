import { ActionTypes } from '../constants/charactersConstants';

export const randomCharactersReducer = (
  state = { characters: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.RANDOM_CHARACTERS_SUCCESS:
      return { characters: payload };

    case ActionTypes.RANDOM_CHARACTERS_FAIL:
      return { error: payload };

    case ActionTypes.CHARACTERS_EDIT_SUCCESS:
      return { characters: payload }

    default:
      return state;
  }
};

export const codeReducer = (
  state = { code: null },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GET_CODE_SUCCESS:
      return { code: payload };

    case ActionTypes.GET_CODE_FAIL:
      return { error: payload };

    default:
      return state;
  }
};
