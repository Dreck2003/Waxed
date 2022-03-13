import { Actions,User,Datatypes } from "../interface";

const initialUser:User={
    name: "",
    lastName: "",
    userName: "",
    password: "",
    email: ""
}


export const userReducer=(state=initialUser,action:Actions):User=>{

    switch(action.type){

        case Datatypes.CREATE_USER:

            return action.payload;

        case Datatypes.GET_USER:

            return action.payload;

        default:
            return state;


    }

}