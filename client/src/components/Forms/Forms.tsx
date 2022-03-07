import { useState } from 'react';
import styled from 'styled-components';

//===================================

import Register from './Register';
import {Formulario,ChangeForm} from './styled';
import Login from './Login';


 const Forms=():JSX.Element=>{

    
    
    const [form,changeForm]=useState<Boolean>(true)


    return(
        <Container>
            <Formulario>
                {form ? 
                    <Login  />
                    :
                    <Register/>
                }
                <ChangeForm onClick={()=>changeForm(!form)}>
                    {form ? <span>Register</span>:<span>Login</span>}
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