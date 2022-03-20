import { useEffect, useState } from 'react';
import styled from 'styled-components';

//===================================

import Register from './Register';
import {Formulario,ChangeForm} from './styled';
import Login from './Login';
import {useSelector} from 'react-redux';
import { State } from '../../redux/reducers';
import { useNavigate } from 'react-router-dom';



 const Forms=():JSX.Element=>{
    const [form,changeForm]=useState<Boolean>(true);
    const usuario=useSelector((state:State)=>state.user);
     const navigate = useNavigate()

    useEffect(()=>{

        if(usuario) navigate('/home')
        console.log('Forms',usuario)

    },[usuario])


    return(
        <Container>
            <Formulario>
                {form ? 
                    <Login  />
                    :
                    <Register/>
                }
                <ChangeForm onClick={()=>changeForm(!form)}>
                    {form ? <span>Sign Up</span>:<span>Login</span>}
                </ChangeForm> 
            </Formulario>
        </Container>
    )

}

const Container=styled.div`
    background-color: #aec4de;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100vh;

`

export default Forms;