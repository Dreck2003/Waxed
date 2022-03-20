import {useState, useEffect} from 'react';
import {Header,Input,GroupRow,GroupCol}from './styled';
import { validator, validateInfo } from '../../helpers/validateForm';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createUser} from '../../redux/actions/user';


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

        const [resError, resFields] = validateInfo(error, inputRegister)
        console.log(resError, resFields)

        if (!resError && !resFields) {
            //Aca vendria el llamado a la api
            dispatch(createUser(inputRegister));
        }

    }


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
            {console.log('Register renderizado')}
            <Header>Sign Up</Header>
            <GroupRow>
                <Input type='text' placeholder='First Name...' name='name'/>
                <Input type='text' placeholder='Last Name...' name='lastName'/>
            </GroupRow>
    
            <GroupCol>
                <Input type='email' placeholder='Email...' name='email'/>
                <Input type='text' placeholder='Username...' name='userName'/>
                <Input type='password' placeholder='Password...' name='password'/>
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