import { Actions,User,Datatypes } from "../interface";

type Initial_User=User | null;

const initialUser:Initial_User=null;
 
export const userReducer = (state = initialUser, action: Actions): Initial_User => {
  switch (action.type) {
    case Datatypes.CREATE_USER:
      window.localStorage.setItem("userLogged", JSON.stringify(action.payload));
      console.log("se pusheo al localStorage CREATE_USER");
      return action.payload;

    case Datatypes.GET_USER:
      window.localStorage.setItem("userLogged", JSON.stringify(action.payload));
      console.log("se pusheo al localStorage GET_USER");
      return action.payload;

    case Datatypes.SAVE_USER:
      const user=window.localStorage.getItem("userLogged");
      let usuario=null;
      if(user){
         usuario = JSON.parse(user);
      }
      console.log('traer ususario: ',user);
      console.log('usuario parseado: ',usuario);
      return usuario;

    case Datatypes.USER_LOGOUT:

      window.localStorage.removeItem('userLogged');

      return null;


    default:
      return state;
  }
};