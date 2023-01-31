import React, { useState } from 'react';
import style from './Dropdown.module.css';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return(
    <div className={style.dropdownWrapper}>
      <button className={style['dropdown-btn']} onClick={()=>setOpen(!open)}>Select Option</button>
      {open &&
      <div className={style['dropdown-list']}>
        <p>Menu 1</p>
        <p>Menu 2</p>
        <p>Menu 2</p>
        <p>Menu 2</p>
        <p>Menu 2</p>
      </div>}
    </div>
  );
};

export default Dropdown;

