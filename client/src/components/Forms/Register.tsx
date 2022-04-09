import {useState, useEffect} from 'react';
import {Header,Input,GroupRow,GroupCol}from './styled';
import { validator, validateInfo } from '../../helpers/validateForm';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createUser} from '../../redux/actions/user';
import Swal from 'sweetalert';


const Register =():JSX.Element=>{

    const navigate=useNavigate();
    const dispatch = useDispatch();

    const [inputRegister, setRegister] = useState({
        name: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    })
    const [error, setError] = useState({
        name: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    })

    useEffect(()=>{
        
    },[])

    const sendRegister = (event:React.FormEvent) => {
        event.preventDefault();

        const res = validateInfo(error, inputRegister)
        // console.log(res)

        if (!res.length) {
            //Aca vendria el llamado a la api
            dispatch(createUser(inputRegister));
        }else{
            Swal({
                title:res[0],
                icon:'warning'
            })
        }

    }
    let errorDivName = error.name ? 'is-invalid' : '';
    let errorDivPass = error.password ? 'is-invalid' : '';
    let errorDivEmail = error.email ? 'is-invalid' : '';
    let errorDivLastname = error.lastName ? 'is-invalid' : '';
    let errorDivUsername = error.userName ? 'is-invalid' : '';


    return(
        <form autoComplete='off' 
        
        onChange={(event) => {
            const input = event.target as HTMLInputElement;

            setRegister({
                ...inputRegister,
                [input.name]: input.value,
            })
            // console.log('input: ', inputRegister)
            setError(validator(error, input))
            // console.log(error)
        }}
            onSubmit={sendRegister}

        >
            {/* {console.log('Register renderizado')} */}
            <Header>Sign Up</Header>
            <GroupRow>
                <div className={errorDivName} title={error.name} >
                    <Input type='text' placeholder='First Name...' name='name' />
                    <b>
                        !
                    </b>
                </div>
                <div className={errorDivLastname} title={error.lastName} >
                    <Input type='text' placeholder='Last Name...' name='lastName' />
                    <b>
                        !
                    </b>
                </div>
            </GroupRow>
    
            <GroupCol>
               <div className={errorDivEmail} title={error.email} >
                    <Input type='email' placeholder='Email...' name='email' />
                    <b>
                        !
                    </b>
               </div> 
                <div className={errorDivUsername} title={error.userName} >
                    <Input type='text' placeholder='Username...' name='userName' />
                    <b>
                        !
                    </b>
                </div>
                 <div className={errorDivPass} title={error.password} >
                    <Input type='password' placeholder='Password...' name='password' />
                    <b>
                        !
                    </b>
                </div> 
                {/* <Input type='password' placeholder='Corfirm Password...'/> */}
            </GroupCol> 
                
            <GroupCol>
                {/* <label style={{display: 'flex', justifyContent: 'center',alignItems: 'center',marginBottom:'10px'}}>
                    <input type='checkbox' style={{marginRight:'5px'}}/>
                I    accept the Terms of Use & Privacy Policy
                 </label> */}
                <button>
                    Submit
                </button>
            </GroupCol>

            
        </form>
    )

}




export default Register;