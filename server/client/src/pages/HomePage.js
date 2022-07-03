import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as charactersActions from '../redux/actions/charactersActions';

import './HomePage.css'

import CharacterInput from '../components/CharacterInput';

const HomePage = () => {

  const [isGenerated, setIsGenerated] = useState(false);

  const dispatch = useDispatch();

  const getCharacters = () => {

    dispatch(charactersActions.getRandomCharacters())

  }

  useEffect(() => {

    if(isGenerated) {

      const interval = setInterval(() => {
        getCharacters();
      }, 2000);
      return () => clearInterval(interval);

    }

  }, [isGenerated])
  
    return (
    <div className='container'>
        <div className='header'>
        <CharacterInput />
        <button onClick={() => setIsGenerated(true)} className="waves-effect waves-light btn">GENERATE 2D GRID</button>
        </div>
        <div className="row">
        <div className="col s1 card-panel teal lighten-2 cell">1</div>
        <div className="col s1 card-panel teal lighten-2 cell">2</div>
        <div className="col s1 card-panel teal lighten-2 cell">3</div>
        <div className="col s1 card-panel teal lighten-2 cell">4</div>
        <div className="col s1 card-panel teal lighten-2 cell">5</div>
        <div className="col s1 card-panel teal lighten-2 cell">6</div>
        <div className="col s1 card-panel teal lighten-2 cell">7</div>
        <div className="col s1 card-panel teal lighten-2 cell">8</div>
        <div className="col s1 card-panel teal lighten-2 cell">9</div>
        <div className="col s1 card-panel teal lighten-2 cell">10</div>
      </div>
      </div>
    )

}

export default HomePage;