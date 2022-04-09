import axios from "axios";
import localforage from "localforage"
import { Dispatch } from "redux"
import {Datatypes, Link,Course} from '../interface';
import Swal from 'sweetalert';

type Curso=Course | null;

const URL_LINK = "http://localhost:3001/api/links";

export const createLink=(name:string,courseId:number,url:string)=>{
    console.log('los parametros de la creacion del link son : ',name ,courseId,url)

    return async(dispatch: Dispatch)=>{

        try{
            const {data}= await axios.post(URL_LINK,{nameLink:name,courseId:courseId,url:url});
            console.log('la respuesta es: ',data)

            if(data.error){
              Swal({
                title:'An error ocurred',
                text:data.error,
                icon:'warning'
              })
              return console.log('error CreateLink: ',data.error);
            } 
            
            dispatch({
                type:Datatypes.CREATE_LINK,
                payload:data.content
            })
            Swal({
              title:'Created Link',
              icon:'success'
            })

        }catch(error){
         Swal({
           title:'Ocurres an error',
           icon:'error'
         }) 
            console.error('createLink- ',error)
        }

    }
}


export const deleteLink = (id:number) => {
    // console.log('los links se van a borrar wajajwaja');
  return async (dispatch: Dispatch) => {
    try {
      Swal({
        title: "Are you sure?",
        text: "Once deleted , you will not be able recover this file!",
        icon: "warning",
        buttons: ['No','Yes'],
        dangerMode: true,
      })
      .then(async(deleted)=>{

        if(deleted){

          const {data}=await axios.delete(URL_LINK,{data:{idLink:id}})
      
          if(data.error){
            Swal({
              title:'Link deletion failed',
              icon:'warning'
            })
            return console.log('error DeleteLink: ',data.error);
          } 
      
          dispatch({
            type: Datatypes.DELETE_LINK,
            payload: data.content,
          });
        }

      })
      

        // console.log("los links se despacharon");


    } catch (error) {
      console.error("error en delete File- ", error);
    }
  };
};