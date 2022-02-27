import logo from './logo.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//============================================================================
import Login from './components/Login/Login';
import Home from './components/Main/Home';
import Nav from './components/Nav/Nav';


function App():JSX.Element{

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/home' element ={<Home/>}/>
          <Route path='/*' element ={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
