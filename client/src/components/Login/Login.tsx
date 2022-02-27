import styled from 'styled-components';

//===================================
import Form from './Form';

 const Login=():JSX.Element=>{

    return(
        <Container>
            <Form/>
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

export default Login;