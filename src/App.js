import Button, { Label } from './component/Button';
import './App.css';

//props => cara untuk mengirim data ke children component
// parent App.js children Button

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Button data="Aqil">Fadly</Button><br/>
      <Button data="Fadly">Tanjung</Button>
      <Label />
    </>
  );
}

export default App;
