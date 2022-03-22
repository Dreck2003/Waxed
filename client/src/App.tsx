import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//============================================================================
import Login from './components/Forms/Forms';
import Home from './components/Main/Home';
import Course from './components/CourseDetail/Course';
// import Create from './components/CreateCourse/Create';


function App():JSX.Element{

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/home' element ={<Home/>}/>
          <Route path='/courses/:id' element ={<Course/>}/>
          <Route path='/*' element ={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
