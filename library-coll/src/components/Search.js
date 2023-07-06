import { Box, Typography } from "@mui/material";
import react, {useState} from 'react'


function Searchh(){
    const [text, setText] = useState("Search...");
    function onChangetext(e){
      setText(e.target.value);
    }
    return (
      <div>
        <br></br>
        <br></br>
        <input onChange = {onChangetext}/>
        <h1>{text}</h1>
      </div>
    )
  }

function Search() {
return (
    <div className="App">
    <Searchh></Searchh> 
    </div>
);
}


  

export default Search;




