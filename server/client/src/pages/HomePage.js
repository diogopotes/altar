import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as charactersActions from '../redux/actions/charactersActions';

import './HomePage.css'

const HomePage = () => {

  const dispatch = useDispatch();

  const loadCharacters = () => {

    dispatch(charactersActions.getRandomCharacters())

  }

  useEffect(() => {

    loadCharacters();

  }, [])
  
    return (
    <div className='container'>
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