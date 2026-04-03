import { useState } from "react";
import Nav from "./Nav";



export default function Header({getKeywords}){

  const onChangeHandler = (event) => {
    const value = event.target.value === '' ? false : true
  setKeywords(event.target.value);
    setActive(value)
}
  const [active, setActive] = useState(false);
  const  [keywords, setKeywords] = useState ('')
  return(
    <>
    <header style={{background: `${active ? "red": "pink"}`}}>
        <div className="logo">News Times</div>
        <input onChange={(event) => {
          onChangeHandler(event);
          getKeywords(event);
        }} />
        {/* <p> The Keywords are : {keywords}</p> */}
        <Nav /> 
    </header>
   
    </>
  );
}