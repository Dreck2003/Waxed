import {Navegator} from './styleNav';
import {StyleLink} from '../../styles/styLink';

const Nav=():JSX.Element=>{

    return (
        <Navegator>
            <StyleLink to='/about'>
                ABOUT
            </StyleLink>

        </Navegator>
    )

}

export default Nav;