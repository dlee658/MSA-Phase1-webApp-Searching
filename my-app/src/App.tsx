import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import Title from './Components/TitleComponent/Title';
import { IUserInput } from './Common/Interfaces';
function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Apple",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
/* title.css searchbar.css */
  return (
    <div className="App">
          <Title></Title>
           <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
    </div>
  );
}

export default App;
