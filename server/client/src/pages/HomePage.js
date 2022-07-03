import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as charactersActions from '../redux/actions/charactersActions';

import './HomePage.css'

import CharacterInput from '../components/CharacterInput';

import CodeSection from '../components/CodeSection';

const HomePage = () => {

  const [isGenerated, setIsGenerated] = useState(false);

  const emptyGrid = [["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", "", ""]]

  const { characters } = useSelector((state) => state.characters);
  
  console.log("characters: ", characters);

  const dispatch = useDispatch();

  useEffect(() => {

    if(isGenerated) {

      const interval = setInterval(() => {
        
        dispatch(charactersActions.getRandomCharacters())


      }, 2000);
      return () => clearInterval(interval);

    }

  }, [isGenerated, dispatch])
  
    return (
    <div className='container'>
        <div className='header'>
        <CharacterInput />
        <button onClick={() => setIsGenerated(!isGenerated)} className="waves-effect waves-light btn">GENERATE 2D GRID</button>
        </div>
        {characters.randomCharacters ? characters.randomCharacters.slice(0, characters.randomCharacters.length).map((chr, index) => {


                return (
                  <div className="row" key={index}>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[0]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[1]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[2]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[3]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[4]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[5]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[6]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[7]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[8]}</div>
                     <div className="col s1 card-panel teal lighten-2 cell">{chr[9]}</div>
                  </div>
                );



        }) : emptyGrid.slice(0, emptyGrid.length).map((cell, index) => {

            return(
              <div className="row" key={index}>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
              <div className="col s1 card-panel teal lighten-2 cell"></div>
           </div>
            )

        })}

        <CodeSection />

      </div>
    )

}

export default HomePage;