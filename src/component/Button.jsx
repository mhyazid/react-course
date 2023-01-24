import React, { useState } from "react";
import Lablel2 from './Label';

function Button(props){
  const [click, setClick] = useState('');
  return (
    <button onClick={()=>setClick("I'm clicked")}>
      Ok, {click}
    </button>
  );
}

function Label(){
  return(
    <p>
      Ini Label
    </p>
  );
}

export {
  Label,
}

export default Button;
