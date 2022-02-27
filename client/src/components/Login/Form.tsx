import GoogleLogin from 'react-google-login';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formulario,Header,Input,GroupRow,GroupCol,ChangeForm}from './styled';
import {succes,failed} from './helper';

const Form =():JSX.Element=>{
    const navigate=useNavigate();

    const [sign,setSign] = useState<Boolean>(true)

    return(
        <Formulario>
            <Header>{sign? 'Sign Up': 'Log In'}</Header>
            {sign && <GroupRow>
                <Input type='text' placeholder='First Name...'/>
                <Input type='text' placeholder='Last Name...'/>
            </GroupRow>}
            {sign ? 
                <GroupCol>
                    <Input type='text' placeholder='Email...'/>
                    <Input type='text' placeholder='Password...'/>
                    <Input type='text' placeholder='Corfirm Password...'/>
                </GroupCol> :
                <GroupCol style={{height:'50%', justifyContent: 'space-evenly'}}>
                    <Input type='text' placeholder='Email...'/>
                    <Input type='text' placeholder='Password...'/>
                    <GoogleLogin
                        clientId="654888355257-epmhucsr0u7d6baq48r3t3794267ub5u.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={(res)=>{
                            succes(res);
                            navigate('/home')
                        }}
                        onFailure={failed}
                        cookiePolicy={'single_host_origin'}
                    />,
                </GroupCol>
            }
            <GroupCol>
                {sign && <label style={{display: 'flex', justifyContent: 'center',alignItems: 'center',marginBottom:'10px'}}>
                    <input type='checkbox' style={{marginRight:'5px'}}/>
                I    accept the Terms of Use & Privacy Policy
                 </label>}
                <button>
                    Submit
                </button>
            </GroupCol>

            <ChangeForm onClick={()=>setSign(!sign)}>
                <span>
                    {sign? 'Log In': 'Sign Up'}
                </span>
            </ChangeForm>
            
        </Formulario>
    )

}




export default Form;