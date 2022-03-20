import { Actions,User,Datatypes } from "../interface";

type Initial_User=User | null;

const initialUser:Initial_User=null;
 
export const userReducer = (state = initialUser, action: Actions): Initial_User => {
  switch (action.type) {
    case Datatypes.CREATE_USER:
      return action.payload;

    case Datatypes.GET_USER:
      return action.payload;

    default:
      return state;
  }
};