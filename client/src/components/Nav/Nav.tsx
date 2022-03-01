import {Navegator} from './styleNav';
import {StyleLink} from '../../styles/styLink';
import { useState } from 'react';
import Create from '../CreateCourse/Create';

const Nav=():JSX.Element=>{


    return (
        <Navegator>
            <span>
                WAXED
            </span>
            <StyleLink to='/home'>
                Home
            </StyleLink>
            <StyleLink to='/about'>
                ABOUT
            </StyleLink>
            <Create/>
        </Navegator>
    )

}

export default Nav;