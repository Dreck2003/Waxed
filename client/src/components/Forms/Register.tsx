import {useState} from 'react';
import {Header,Input,GroupRow,GroupCol}from './styled';
import { validator, validateInfo } from '../../helpers/validateForm';


const Register =():JSX.Element=>{

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
        onSubmit={(event) => {
            event.preventDefault();

            const [resError, resFields] = validateInfo(error, inputRegister)
            console.log(resError,resFields)

            if (!resError && !resFields) {
                fetch('http://localhost:3001/api/users/create', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputRegister)
                })
                    .then(res => {
                        console.log(res.status)
                        if (res.status === 403) alert('The user does not exist')
                        return res.json()
                    })
                    .then(data => {
                        console.log(data)

                    })
            }

        }}




        >
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
                <label style={{display: 'flex', justifyContent: 'center',alignItems: 'center',marginBottom:'10px'}}>
                    <input type='checkbox' style={{marginRight:'5px'}}/>
                I    accept the Terms of Use & Privacy Policy
                 </label>
                <button>
                    Submit
                </button>
            </GroupCol>

            
        </form>
    )

}




export default Register;