import { combineReducers } from 'redux';
import { randomCharactersReducer, codeReducer } from './charactersReducers';

const reducers = combineReducers({
  characters: randomCharactersReducer,
  code: codeReducer
});

export default reducers;
