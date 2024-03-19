import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Teach from './Components/Teach';
import Learning from './Components/Learning';
import Earn from './Components/Earn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Teach' element={<Teach/>}/>
  <Route path='/Learn' element={<Learning/>}/>
  <Route path='/Earn' element={<Earn/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
