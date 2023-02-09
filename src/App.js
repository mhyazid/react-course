import React from 'react';
import Increment from './component/Increment';
import Input from './component/Input';
import Dropdown from './component/Dropdown';
import './App.css';
import 'typeface-nunito';
import MainLayout from './component/MainLayout';

//props => cara untuk mengirim data ke children component
// parent App.js children Button

function App() {

  return (
    <MainLayout/>
  );
}

export default App;
