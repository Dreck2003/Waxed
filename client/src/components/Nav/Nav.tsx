import {Navegator} from './styleNav';
import {StyleLink} from '../../styles/styLink';
import Create from '../CreateCourse/Create';
import Todo from '../Todo/Todo';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';
import { cleanTasks } from '../../redux/actions/task';

const Nav=():JSX.Element=>{

    const navigate=useNavigate();

    const dispatch=useDispatch();
    const logout=(event:any)=>{

        dispatch(logoutUser());
        dispatch(cleanTasks());        
        navigate('/');


    }

    return (
        <Navegator>
            <span>
                WAXED
            </span>
            {/* <input type='date'/> */}
            <span className='buttonLink' onClick={logout}>
                Salir
            </span>
            <Todo/>
            <StyleLink to='/home' className='buttonLink'>
                Home
            </StyleLink>
            <Create/>
        </Navegator>
    )

}

export default Nav;