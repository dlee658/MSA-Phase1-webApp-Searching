import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import Title from './Components/TitleComponent/Title';
import Term from './Components/TermComponent/Term';
import { IUserInput } from './Common/Interfaces';
import MediaGrid from './Components/MediaGridComponent/MediaGrid';

function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Apple",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App">
          <Title></Title>
          <Term SetUserInput={(a: IUserInput) => SetUserInput(a)}/>       
           <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
           <MediaGrid SearchQuery={UserInput.SearchQuery}/>
    </div>
  );
}

export default App;
