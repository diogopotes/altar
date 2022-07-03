import React from 'react';

const CharacterInput = () => {


    return (
        <div className='container'>
        <form className="col s12">
        <div className="row">
        <div className="input-field col s6">
          <input placeholder="Character" id="first_name" type="text" className="validate" />
        </div>
      </div>
         </form>
        </div>
    )

}

export default CharacterInput;