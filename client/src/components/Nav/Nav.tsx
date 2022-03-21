import {Navegator} from './styleNav';
import {StyleLink} from '../../styles/styLink';
import Create from '../CreateCourse/Create';

const Nav=():JSX.Element=>{


    return (
        <Navegator>
            <span>
                WAXED
            </span>
            <StyleLink to='/home' className='buttonLink'>
                Home
            </StyleLink>
            <StyleLink to='/about' className='buttonLink'>
                About
            </StyleLink>
            <Create/>
        </Navegator>
    )

}

export default Nav;