import { combineReducers } from 'redux';
import { randomCharactersReducer } from './charactersReducers';

const reducers = combineReducers({
  characters: randomCharactersReducer
});

export default reducers;
