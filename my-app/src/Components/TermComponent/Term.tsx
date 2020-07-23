 import React from 'react';
import './Term.css';
import { IUserInput } from '../../Common/Interfaces'

interface ISearchBarProps{
  SetUserInput: (a: IUserInput) => void;
}

function Term(props: ISearchBarProps) {
    return (
      <div className="Term">
            Searching Term: 
            props
      </div>

    );
}

export default Term;