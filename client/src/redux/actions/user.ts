import { Dispatch } from "redux";
import { User } from "../../interfaces/interfaces";
import { Actions, Datatypes } from "../interface";


export const createUser=(usuario:User)=>{

    return (dispatch:Dispatch)=>{

            fetch("http://localhost:3001/api/user/create",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            })
            .then(res=>res.json())
            .then(userCreate=>{
                
                dispatch<Actions>({
                    type:Datatypes.CREATE_USER,
                    payload:userCreate
                });

            })
            .catch(err =>{
                console.log('29- ',err)
            })

   
    }

}

interface DataUser{
    userName:string
    password:string
}


export const getUser=(userData:DataUser) =>{

    return (dispatch: Dispatch)=>{

        fetch("http://localhost:3001/api/user/",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(userData)

        })
        .then(res=>res.json())
        .then(user=>{

            dispatch({
                type:Datatypes.GET_USER,
                payload:user
            })
        })

    }

}
