import React, {useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import './SearchBar.css';
import { IUserInput } from '../../Common/Interfaces'

interface ISearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {

    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) =>{
        setSearchQuery(s);          
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);
    const handleSubmit = () => {
        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
                }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    return <div className="SearchBarContainer">
                <TextField className="txtField"
                    required
                    id="outlined-required"
                    label="Images to Search"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() => setHasFocus(true)}
                    onKeyPress={(e)=>{
                        if(e.key === 'Enter'){
                            handleSubmit();
                        }
                    }}

                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                />
                <Button className="button" variant="contained" color="primary" onClick={handleSubmit}>
                    Search
                </Button>

    </div>
}
export default SearchBar