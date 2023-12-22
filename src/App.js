import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/home';
import Login from './Components/login';
import Register from './Components/register';
import Navbar from './Components/navabar'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
