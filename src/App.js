
import './App.css';
import Addblog from './components/Addblog';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Apps from './components/Apps';

function App() {
  return (
    <div className="App">
       
       <Navbar/>
      <Routes>
      <Route path='/' element={<Apps/>}/>
        <Route path='/add' element={<Addblog/>}/>
        <Route path='/'/>
        
      </Routes>

    </div>
  );
}

export default App;
