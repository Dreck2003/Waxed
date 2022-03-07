import GoogleLogin from 'react-google-login';
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { validator, validateInfo} from '../../helpers/validateForm';
import { succes, failed } from './helper';
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
                fetch('http://localhost:3001/api/users', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputLogin)
                })
                    .then(res => {
                        console.log(res.status)
                        if (res.status === 403) alert('The user does not exist')
                        return res.json()
                    })
                    .then(data => {
                        if(!data.error){
                            contextAuth.changeUser(data.name,data.lastName,data.userName);
                            navigate('/home')
                        }
                        console.log(data)

                    })
            }

        }}
        >
            <Header>Login</Header>
            <GroupCol>
                <Input type='text' placeholder='userName...' name='userName'/>
                <Input type='password' placeholder='Password...' name='password'/>
                <GoogleLogin
                    clientId="654888355257-epmhucsr0u7d6baq48r3t3794267ub5u.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={(res) => {
                        succes(res);
                        navigate('/home')
                    }}
                    onFailure={failed}
                    cookiePolicy={'single_host_origin'}
                />
                <button>
                    Submit
                </button>
            </GroupCol>

        </form>

    )
}
export default Login;