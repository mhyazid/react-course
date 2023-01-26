import React, { useState } from 'react';
import css from './Input.module.css';

function Input(){
  const [value, setValue] = useState('Muhammad Fadly Tanjung');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    alert(`Halo, ${value}`);
  };

  return (
    <>
      <input className={css.inputfield} onChange={handleChange} type="text" value={value} /><br />
      <button onClick={()=>handleClick()} type="button">Submit</button>
    </>
  );
}

export default Input;
