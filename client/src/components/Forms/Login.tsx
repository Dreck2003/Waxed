import GoogleLogin from 'react-google-login';
import { useState,useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { validator, validateInfo,sendInfo} from '../../helpers/validateForm';
// import { succes, failed } from './helper';
import { Input, GroupCol, Header } from './styled';
import AuthContext from '../../context/authContext';



const Login = () => {
    const navigate = useNavigate();
    const contextAuth=useContext(AuthContext);

    const [inputLogin, setLogin] = useState({
        userName: '',
        password: '',
        
    })
    const [error, setError] = useState({
        userName: '',
        password: ''
    })

    useEffect(()=>{
        console.log('login')

        if(contextAuth.user){
            navigate('/home')
        }
    },[])


    return (
        <form autoComplete='off' 
            onChange={(event) => {
                const input=event.target as HTMLInputElement;
                // console.log(input)
            setLogin({
                ...inputLogin,
                [input.name]:input.value
            })
            // console.log('input: ',inputLogin)
            setError(validator(error,input))
            // console.log(error)
        }}
        onSubmit={(event) => {
            event.preventDefault();
            const [resError,resFields]=validateInfo(error,inputLogin)
            
            if(!resError && !resFields) {
                
                sendInfo('http://localhost:3001/api/users',inputLogin,contextAuth,navigate,'/home')
            }

        }}
        >
            {console.log('login renderizado')}
            <Header>Login</Header>
            <GroupCol>
                <Input type='text' placeholder='userName...' name='userName'/>
                <Input type='password' placeholder='Password...' name='password'/>
                {/* <GoogleLogin
                    clientId="654888355257-epmhucsr0u7d6baq48r3t3794267ub5u.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={(res) => {
                        console.log(res)
                        sendInfo('http://localhost:3001/api/users', inputLogin, contextAuth,navigate,'/home')
                    }}
                    onFailure={failed}
                    cookiePolicy={'single_host_origin'}
                /> */}
                <button>
                    Submit
                </button>
            </GroupCol>

        </form>

    )
}
export default Login;