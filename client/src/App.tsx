import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';

//============================================================================
import Login from './components/Forms/Forms';
import Home from './components/Main/Home';
import Course from './components/CourseDetail/Course';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './redux/reducers';
import { saveUser } from './redux/actions/user';
// import Create from './components/CreateCourse/Create';


function App():JSX.Element{

  const user=useSelector((state:State) =>state.user);
  const dispatch=useDispatch();

  useEffect(()=>{
      console.log('useEFFFECTTTTT de app')
    if(!user){
      dispatch(saveUser())
      console.log('EL USER NO EXISTEEEEEEEEEEEEEEEEEE')
    }
    console.log('USERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR APP:  ',user)

  },[user])

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
        <Route path='/home' element={user ? <Home />:<Navigate to='/'/>}/>
        <Route path='/courses/:id' element={user ? <Course />:<Navigate to='/home' />}/>
        <Route path='/*' element={user ? <Home />: <Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
