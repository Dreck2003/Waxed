// import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { validateInfo, validator,} from '../../helpers/validateForm';
import { Input, GroupCol, Header } from './styled';
import { getUser } from '../../redux/actions/user';
import Swal from 'sweetalert';



const Login = () => {
    const dispatch=useDispatch();

    const [inputLogin, setLogin] = useState({
        userName: '',
        password: '',
        
    })
    const [error, setError] = useState({
        userName: '',
        password: ''
    })


    const sendSubmit=(event:React.ChangeEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const res=validateInfo(error,inputLogin);
        // console.log('aprobado? : ',res);
        if(!res.length){

            dispatch(getUser(inputLogin));
        }else{

            Swal({
                title:res[0],
                icon:'warning' 
            })
        }

    }

    let errorDivName = error.userName ? 'is-invalid' : '';
    let errorDivPass = error.password ? 'is-invalid' : '';

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
            onSubmit={sendSubmit}
        >
            {/* {console.log('login renderizado')} */}
            <Header>Login</Header>
            <GroupCol>
                <div className={errorDivName} title={error.userName }>
                    <Input type='text' placeholder='Username...' name='userName'  />
                    <b >
                        !
                    </b>
                </div>
                <div className={errorDivPass} title={error.password}>
                    <Input type='password' placeholder='Password...' name='password'  />
                    <b >
                        !
                    </b>
                </div>
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
                <button >
                    Submit
                </button>
            </GroupCol>

        </form>

    )
}
export default Login;