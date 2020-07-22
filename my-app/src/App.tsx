import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import { IUserInput } from './Common/Interfaces';
function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Apple",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App">

           <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
    </div>
  );
}

export default App;
