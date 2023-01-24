import React from 'react';
import Increment from './component/Increment';
import './App.css';

//props => cara untuk mengirim data ke children component
// parent App.js children Button

function App() {

  return (
    <>
      {/* <h1>Hello world</h1>
      <Button data="Aqil">Fadly</Button><br/>
      <Button data="Fadly">Tanjung</Button>
      <LabelComponent >
        Ini CHildrennya
      </LabelComponent> */}
      <Increment />
    </>
  );
}

export default App;
