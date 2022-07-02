import axios from 'axios';

import { FETCH_CHARACTERS } from './types';

const fetchCharacters = () => {

    return function(dispatch) {

        axios.get('/api/random_characters')
        .then(res => dispatch({type: FETCH_CHARACTERS, payload: res}))

    }


}