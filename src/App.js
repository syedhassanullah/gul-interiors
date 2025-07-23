// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './shared/Navbar/Nav';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
