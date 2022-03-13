import { Actions,Link,Datatypes } from "../interface";



export const linkReducer=(state:Link[],action:Actions)=>{


    switch(action.type){

        case Datatypes.CREATE_FILE:

            return action.payload;

        case Datatypes.GET_FILES:
            return action.payload;

        default:
            return state;


    }

}