
import { useNavigate } from 'react-router-dom';

import { ProviderUser } from '../interfaces/interfaces';




interface Login{
  userName:string,
  password:string,
  
}

interface Register{
  name:string,
  lastName:string,
  email:string,
  userName :string,
  password:string,

}

type Form = Login | Register | any


export const validator=(error:any,input:HTMLInputElement):Form=>{
    const value=input.value;
    const name=input.name;
    let errors:Form;

    switch (input.type) {

      case "text":
        if(/[^a-z\x20]/.test(value)){
            //Si es true es poque tiene signos extraños
            errors = {
              ...error,
              [name]: "The field cannot have signs",
            };
        }else{
            errors={
                ...error,
                [name]:''
            }
        }

        break;

      case "password":
        if(value.length < 5 || value.length >15){

            errors = {
              ...error,
              [name]: "Must be between 5 and 15 characters",
            };
            break;

        }
        if(!(/[0-9]/.test(value))){
            //Si no hay un numero:
            errors = {
              ...error,
              [name]: "The password must have at least one number",
            };
            break;
        }

        errors = {
          ...error,
          [name]: '',
        };
        break;

        
      case "email":
        // let val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!(/.@gmail.com/.test(value))) {

          errors = {
            ...error,
            [name]:'It is not a valid email'
          }
        }else{
          errors = {
            ...error,
            [name]:''
          }
        }
        break;

        default:
            break;
    }
        

    if (!value) {
      errors = {
        ...error,
        [name]: "The field cannot be empty",
      };
    }
    // console.log(input,errors);

    return errors!;

}




export const validateInfo=(error:any,input:any):string[]=>{
  // console.log(error)
  let result:string[]=[]

    for(let index in error){
      // console.log(error[index]);
      if(error[index]){
         result[0]='Existen errores';
      }

    }

    for(let index in input){
      // console.log(input[index]);
      if(!input[index]){
         result[0]='Faltan campos';
      }

    }

    return result
}

export const sendInfo = (
  url: string,
  inputData: any,
  context: ProviderUser,
  navigate: any,
  to:string
) => {
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  })
    .then((res) => {
      console.log(res.status);
      if (res.status === 403) alert("The user does not exist");
      return res.json();
    })
    .then((data) => {
      if (!data.error) {
        context.changeUser(data.name, data.lastName, data.userName);
        alert("Correct user");
        navigate(to);
      } else {
        alert(data.error);
      }
      console.log(data);
    });
};


export const sendCourse=(url:string,form:any,cb:any)=>{

  fetch(url, {
    method: "POST",
    mode: "cors",
    body:form,
  })
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((data) => {
      console.log(data);
      cb(data)
    })
    .catch((err) => {
      console.log(err);
    });



}
