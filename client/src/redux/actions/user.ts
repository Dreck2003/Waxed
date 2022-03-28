import { Dispatch } from "redux";
import { User } from "../../interfaces/interfaces";
import { Actions, Datatypes } from "../interface";
import axios from 'axios';

const URL_USER = "http://localhost:3001/api/users/";


export const createUser=(usuario:User)=>{

    return async(dispatch:Dispatch)=>{


        try{

            const {data}=await axios.post(URL_USER+'create',usuario);

            if(data.error) return console.log('error: ',data.error);
            console.log('createUSer: ',data.content);

            dispatch<Actions>({
              type: Datatypes.CREATE_USER,
              payload: data.content,
            });


        }catch(error){
            console.log('createUser Action: ',error)
        }
    }

}

interface DataUser{
    userName:string
    password:string
}


export const getUser=(userData:DataUser) =>{

    return async(dispatch: Dispatch)=>{
            
        try{
            const {data}=await axios.post(URL_USER,userData);

            if(data.error) return console.log('getUSer Action-Data: ',data.error);
            console.log('el usuario devuelto sig in: ',data.content);

            dispatch({
                type: Datatypes.GET_USER,
                payload: data.content,
            });


        }catch(error){
            console.log('getUser Action: ',error);
        }




    }

}

export const saveUser=()=>{
    console.log('llamando a la action saveUser!!!!!!!')
    return {
        type:Datatypes.SAVE_USER,
    }


}

export const logoutUser=()=>{
    return {
        type:Datatypes.USER_LOGOUT
    }
}
