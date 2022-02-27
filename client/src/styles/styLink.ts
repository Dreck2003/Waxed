import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyleLink = styled(Link)`
    color:white;
    text-decoration: none;
    font-weight: bold;

    &:hover{
        border-bottom: 2px solid white;
    }

`