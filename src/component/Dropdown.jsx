import React, { useState, useEffect, useRef } from 'react';
import style from './Dropdown.module.css';
import ArrowDown from './Icons/ArrowDown';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [menus, setMenus] = useState([
    'Menu 1',
    'Menu 2',
    'Menu 3',
    'Menu 4',
  ]);
  const [selectedMenu, setSelectedMenu] = useState('Select Option');
  const menuRef = useRef(null);
  const handleClickMenu = (data) => {
    setSelectedMenu(data);
    setOpen(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  return(
    <div className={style.dropdownWrapper} ref={menuRef}>
      <button
        className={style['dropdown-btn']} onClick={() => setOpen(!open)}>
        {selectedMenu}
        <ArrowDown />
      </button>
      {open &&
      <div className={style['dropdown-list']}>
        {menus.map((elem, id) => 
          <div key={id} onClick={()=>handleClickMenu(elem)}>{elem}</div>)}
      </div>}
    </div>
  );
};

export default Dropdown;

