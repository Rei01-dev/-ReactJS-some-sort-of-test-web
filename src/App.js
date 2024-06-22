import './App.css';
import Navbar from './Navbar';
import Person from './Person';

function App() {

  return (
    <div className='container'>
        <Navbar />
      <div className='mainSection'>

        <Person name = {'John Adams'} age = {25} job = {'Junior web developer'} img = 'https://i.pinimg.com/originals/62/04/69/620469cf164ff6c43c964af300514254.jpg' />

        <Person name = {'Christine'} age = {24} job = {'Web developer'} img = 'https://i.pinimg.com/originals/d9/3d/5c/d93d5c7ce9c7662ea5d6a4057194dfce.jpg' />
        
        <Person name = {'Max'} age = {28} job = {'CEO'} img = 'https://i.pinimg.com/originals/1f/cb/1d/1fcb1dda9ba78793be13e00c00a5ceb7.jpg' />

      </div>
    </div>
  );
}

export default App;
